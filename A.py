Private Declare PtrSafe Function GetTickCount Lib "kernel32" () As Long

Sub KeepTeamsActive()
    Application.OnTime Now + TimeValue("00:04:00"), "KeepTeamsActive" ' Run again in 4 min

    Randomize GetTickCount ' Generate a better random seed
    Dim activity As Integer
    activity = Int((3 - 1 + 1) * Rnd + 1) ' Pick random number 1-3

    Select Case activity
        Case 1
            PerformCalculation
        Case 2
            UpdateHiddenRange
        Case 3
            OpenCloseWorkbook
    End Select
End Sub

Sub PerformCalculation()
    Dim x As Double
    x = WorksheetFunction.Sum(Rnd(), Rnd()) ' Random calculation
End Sub

Sub UpdateHiddenRange()
    Dim rng As Range
    Set rng = ThisWorkbook.Names("HiddenRange").RefersToRange ' Hidden named range
    rng.Value = Now ' Updates value invisibly
End Sub

Sub OpenCloseWorkbook()
    Dim wb As Workbook
    On Error Resume Next
    Set wb = Workbooks.Open(ThisWorkbook.Path & "\dummy.xlsx", UpdateLinks:=False, ReadOnly:=True, IgnoreReadOnlyRecommended:=True)
    wb.Close False ' Close without saving
    On Error GoTo 0
End Sub