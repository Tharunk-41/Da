import streamlit as st
import pandas as pd
from openpyxl import load_workbook
from openpyxl.styles import PatternFill
import io

def compare_and_highlight(before_file, after_file):
    df_before = pd.read_csv(before_file)
    df_after = pd.read_csv(after_file)
    
    df_merged = pd.merge(df_before, df_after, on='id', how='outer', suffixes=('_before', '_after'), indicator=True)
    
    column_order = ['id']
    for col in df_before.columns:
        if col != 'id':
            column_order.append(f'{col}_before')
            column_order.append(f'{col}_after')
    column_order.append('_merge')
    df_merged = df_merged[column_order]
    
    output = io.BytesIO()
    with pd.ExcelWriter(output, engine='openpyxl') as writer:
        df_merged.to_excel(writer, sheet_name='Comparison', index=False)
    
    wb = load_workbook(output)
    ws = wb['Comparison']
    
    red_fill = PatternFill(start_color='FF9999', end_color='FF9999', fill_type='solid')
    green_fill = PatternFill(start_color='99FF99', end_color='99FF99', fill_type='solid')
    yellow_fill = PatternFill(start_color='FFFF99', end_color='FFFF99', fill_type='solid')
    
    for row in ws.iter_rows(min_row=2, max_row=ws.max_row, min_col=1, max_col=ws.max_column):
        row_status = row[-1].value
        
        if row_status == 'left_only':
            for cell in row:
                cell.fill = red_fill
        elif row_status == 'right_only':
            for cell in row:
                cell.fill = green_fill
        else:
            for i in range(1, len(row) - 1, 2):
                before_cell = row[i]
                after_cell = row[i + 1]
                if before_cell.value != after_cell.value:
                    after_cell.fill = yellow_fill
    
    ws.delete_cols(ws.max_column)
    output.seek(0)
    wb.save(output)
    wb.close()
    output.seek(0)
    return output

st.set_page_config(page_title="Data Comparison Tool", page_icon="📊", layout="centered")
st.title("🔍 CSV Comparison Tool")
st.markdown("Compare two CSV files and highlight differences.")

st.sidebar.header("Upload CSV Files")
before_file = st.sidebar.file_uploader("📂 Upload Before CSV", type=["csv"], key="before")
after_file = st.sidebar.file_uploader("📂 Upload After CSV", type=["csv"], key="after")

st.markdown("---")

tab1, tab2 = st.tabs(["📄 Instructions", "⚙️ Compare & Download"])

with tab1:
    st.subheader("How It Works")
    st.write("1. Upload the 'Before' and 'After' CSV files.")
    st.write("2. Click 'Compare' to generate a comparison report.")
    st.write("3. Download the Excel file with highlighted differences.")
    st.markdown("<hr>", unsafe_allow_html=True)
    st.info("Red: Deleted rows | Green: New rows | Yellow: Modified values")

with tab2:
    if before_file and after_file:
        if st.button("🔍 Compare & Generate Report", use_container_width=True):
            with st.spinner("Processing... Please wait."):
                output_file = compare_and_highlight(before_file, after_file)
                st.success("✅ Comparison Complete! Click below to download the output file.")
                st.download_button("📥 Download Output.xlsx", output_file, file_name="output.xlsx", mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", use_container_width=True)
    else:
        st.warning("⚠️ Please upload both CSV files to proceed.")
