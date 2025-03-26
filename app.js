import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, TextField, Button, Grid, Paper, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Checkbox, IconButton,
  Select, MenuItem, FormControl, InputLabel, Badge, Tabs, Tab
} from '@mui/material';
import {
  Search, NotificationsActive, Apps, ExitToApp, ArrowForward
} from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const SocieteGeneraleApp = () => {
  const [value, setValue] = useState(1);
  const [selectedRow, setSelectedRow] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Mock data for the first grid
  const gridOneData = [
    { id: 1, ovstat: true, ano: '79221735', anoDate: '', currentNumber: '79221735', fileRef: '1102517', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 2, ovstat: false, ano: '79221736', anoDate: '', currentNumber: '79221736', fileRef: '1102517', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 3, ovstat: false, ano: '79221742', anoDate: '', currentNumber: '79221742', fileRef: '1102518', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 4, ovstat: false, ano: '79221782', anoDate: '', currentNumber: '79221782', fileRef: '1102525', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 5, ovstat: false, ano: '79230018', anoDate: '', currentNumber: '79230018', fileRef: '1102544', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 6, ovstat: false, ano: '79230042', anoDate: '', currentNumber: '79230042', fileRef: '1102562', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 7, ovstat: false, ano: '79230045', anoDate: '', currentNumber: '79230045', fileRef: '1102563', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 8, ovstat: false, ano: '79230068', anoDate: '', currentNumber: '79230068', fileRef: '1102585', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 9, ovstat: false, ano: '79230072', anoDate: '', currentNumber: '79230072', fileRef: '1102585', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 10, ovstat: false, ano: '79230076', anoDate: '', currentNumber: '79230076', fileRef: '1102587', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 11, ovstat: false, ano: '79230080', anoDate: '', currentNumber: '79230080', fileRef: '1102591', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
    { id: 12, ovstat: false, ano: '79230097', anoDate: '', currentNumber: '79230097', fileRef: '1102602', fileNumber: 'KUB', userCreation: '', loginSesame: 'STG', cat: 'GL', opType: '', refOp: '', autoRev: '', genSTD: '', genOPV: '', genCNE: '', idTransaction: 'CR24357155', genALT: '', rdl: '', rdlGraphic: '' },
  ];

  // Mock data for the second grid
  const gridTwoData = [
    { account: '10795000', accountWording: 'NOT ALLOCATED', ledgerType: 'FRA', portfolio: 'MIFID', ccf: 'RECAPITB', caRis: '', targetBranch: '07033', sogaCounter: '', amountDebit: '100', amountCredit: '', comment: 'ACCA' },
    { account: '59110397', accountWording: 'FONDS A PAYER', ledgerType: 'FRA', portfolio: 'MIFID', ccf: 'NETPAPAR', caRis: '', targetBranch: '07033', sogaCounter: '', amountDebit: '', amountCredit: '100', comment: 'ACCA' },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', height: '100vh', overflow: 'auto' }}>
        {/* Header */}
        <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #e0e0e0' }}>
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', color: '#000' }}>
                <Box component="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale.svg/1200px-Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale.svg.png" alt="Societe Generale Logo" sx={{ height: 30, mr: 2 }} />
              </Typography>
              <Button color="inherit" sx={{ textTransform: 'none' }}>Home</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <NotificationsActive />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Apps />
              </IconButton>
              <Typography variant="body2" sx={{ mx: 2, fontWeight: 'bold' }}>
                SG | MARKETS
              </Typography>
              <Button color="inherit" endIcon={<ExitToApp />} sx={{ textTransform: 'none' }}>
                Sign out
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Create Entry" />
            <Tab label="Search Entry" sx={{ bgcolor: '#ffeb3b', fontWeight: 'bold' }} />
            <Tab label="Journal entries" />
          </Tabs>
        </Box>

        {/* Main Content */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            Search entries
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="body2" sx={{ color: 'gray' }}>
              Required fields are marked with *
            </Typography>
          </Typography>

          {/* Search Filters */}
          <Grid container spacing={2} sx={{ mb: 2, justifyContent: "space-between" }}>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "15%" }}>
              <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      height: "40px", // Adjust height
                      "& .MuiInputBase-root": {
                        height: "40px", // Adjust input container height
                        fontSize: "14px", // Optional: Adjust font size
                      },
                      "& .MuiInputBase-input": {
                        padding: "5px", // Adjust padding inside the input
                      },
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "15%" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Range *</InputLabel>
                <Select
                  value="interval"
                  label="Range *"
                  startAdornment={<Search />}
                >
                  <MenuItem value="interval">Interval equal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "15%" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Reconciliation</InputLabel>
                <Select
                  value="reconciliation"
                  label="Reconciliation"
                  startAdornment={<Search />}
                >
                  <MenuItem value="reconciliation">Reconciliation equals</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "15%" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Category</InputLabel>
                <Select
                  value="category"
                  label="Category"
                  startAdornment={<Search />}
                >
                  <MenuItem value="category">Category</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "15%" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Type</InputLabel>
                <Select
                  value="type"
                  label="Type"
                  startAdornment={<Search />}
                >
                  <MenuItem value="type">Type</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "15%" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Business Unit</InputLabel>
                <Select
                  value="businessUnit"
                  label="Business Unit"
                  startAdornment={<Search />}
                >
                  <MenuItem value="businessUnit">Business Unit</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, alignItems: "flex-end" }}>
            <Grid container spacing={0} sx={{ mb: 0, alignItems: "left", display: "flex", flexDirection: "column", width: "20%" }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Accounting date</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "4px" }}>
                <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      height: "30px", // Adjust height
                      "& .MuiInputBase-root": {
                        height: "30px", // Adjust input container height
                        fontSize: "14px", // Optional: Adjust font size
                      },
                      "& .MuiInputBase-input": {
                        padding: "5px", // Adjust padding inside the input
                      },
                    },
                  },
                }}
              />
                  <span style={{ margin: "0 8px" }}>→</span>
                  <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      height: "30px", // Adjust height
                      "& .MuiInputBase-root": {
                        height: "30px", // Adjust input container height
                        fontSize: "14px", // Optional: Adjust font size
                      },
                      "& .MuiInputBase-input": {
                        padding: "5px", // Adjust padding inside the input
                      },
                    },
                  },
                }}
              />
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ mb: 0, alignItems: "left", display: "flex", flexDirection: "column", width: "20%" }}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Event date</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "4px" }}>
                <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      height: "30px", // Adjust height
                      "& .MuiInputBase-root": {
                        height: "30px", // Adjust input container height
                        fontSize: "14px", // Optional: Adjust font size
                      },
                      "& .MuiInputBase-input": {
                        padding: "5px", // Adjust padding inside the input
                      },
                    },
                  },
                }}
              />
                  <span style={{ margin: "0 8px" }}>→</span>
                  <DatePicker
                slotProps={{
                  textField: {
                    sx: {
                      height: "30px", // Adjust height
                      "& .MuiInputBase-root": {
                        height: "30px", // Adjust input container height
                        fontSize: "14px", // Optional: Adjust font size
                      },
                      "& .MuiInputBase-input": {
                        padding: "5px", // Adjust padding inside the input
                      },
                    },
                  },
                }}
              />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ width: "20%" }}>
              <FormControl fullWidth size="small" >
                <InputLabel>BOR criteria</InputLabel>
                <Select
                  value="BOR criteria"
                  label="bOR criteria"
                  startAdornment={<Search />}
                >
                  <MenuItem value="Kubi-bittu kumar"> kumar</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "20%" }}>
              <TextField
                label="File number"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ width: "15%" }}>
              <FormControl fullWidth size="small">
                <InputLabel>Advanced Filters</InputLabel>
                <Select
                  value="Advanced Filters"
                  label="Advanced Filters"
                >
                  <MenuItem value="">Select</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 2 }}>
            <Button variant="contained" sx={{ bgcolor: '#ff7043', color: 'white', '&:hover': { bgcolor: '#e64a19' } }}>
              Search
            </Button>
            <Button variant="outlined">
              Download
            </Button>
          </Box>

          {/* GRID 1 */}
          <Paper sx={{ width: '100%', mb: 2, border: '2px solid #ff7043', borderRadius: '4px', position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
              <Button variant="contained" size="small" sx={{ bgcolor: '#e0e0e0', color: 'black', borderRadius: '0' }}>
                Cancel
              </Button>
            </Box>
            <Typography variant="h6" sx={{ position: 'absolute', top: -30, left: 10, color: 'red', fontWeight: 'bold' }}>
              GRID 1
            </Typography>
            <TableContainer sx={{ maxHeight: 300 }}>
              <Table stickyHeader size="small">
                <TableHead>
                  <TableRow sx={{ '& th': { bgcolor: '#f5f5f5', fontWeight: 'bold' } }}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell>OV/Stat</TableCell>
                    <TableCell>Ano.</TableCell>
                    <TableCell>Ano. date</TableCell>
                    <TableCell>Current number</TableCell>
                    <TableCell>File ref</TableCell>
                    <TableCell>File number</TableCell>
                    <TableCell>User creation</TableCell>
                    <TableCell>Login sesame</TableCell>
                    <TableCell>Cat.</TableCell>
                    <TableCell>OP type</TableCell>
                    <TableCell>Ref OP</TableCell>
                    <TableCell>Auto rev</TableCell>
                    <TableCell>Gen STD</TableCell>
                    <TableCell>Gen OPV</TableCell>
                    <TableCell>Gen CNE</TableCell>
                    <TableCell>ID Transaction</TableCell>
                    <TableCell>Gen ALT</TableCell>
                    <TableCell>R.D.L</TableCell>
                    <TableCell>R.D.L graphic</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gridOneData.map((row) => (
                    <TableRow
                      key={row.id}
                      hover
                      selected={selectedRow === row.id}
                      onClick={() => setSelectedRow(row.id)}
                      sx={{
                        '&:nth-of-type(1)': { bgcolor: '#fff9c4' },
                        '&.Mui-selected': { bgcolor: '#fff9c4' }
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={row.ovstat} />
                      </TableCell>
                      <TableCell>
                        <IconButton size="small" color="primary">
                          <ArrowForward fontSize="small" />
                        </IconButton>
                      </TableCell>
                      <TableCell>{row.ovstat ? 'OV' : ''}</TableCell>
                      <TableCell>{row.ano}</TableCell>
                      <TableCell>{row.anoDate}</TableCell>
                      <TableCell>{row.currentNumber}</TableCell>
                      <TableCell>{row.fileRef}</TableCell>
                      <TableCell>{row.fileNumber}</TableCell>
                      <TableCell>{row.userCreation}</TableCell>
                      <TableCell>{row.loginSesame}</TableCell>
                      <TableCell>{row.cat}</TableCell>
                      <TableCell>{row.opType}</TableCell>
                      <TableCell>{row.refOp}</TableCell>
                      <TableCell>{row.autoRev}</TableCell>
                      <TableCell>{row.genSTD}</TableCell>
                      <TableCell>{row.genOPV}</TableCell>
                      <TableCell>{row.genCNE}</TableCell>
                      <TableCell>{row.idTransaction}</TableCell>
                      <TableCell>{row.genALT}</TableCell>
                      <TableCell>{row.rdl}</TableCell>
                      <TableCell>{row.rdlGraphic}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, bgcolor: '#f5f5f5' }}>
              <Typography variant="body2">1 to 20 of 71</Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>Page 1 of 3</Typography>
            </Box>
          </Paper>

          {/* GRID 2 */}
          <Paper sx={{ width: '100%', mb: 2, position: 'relative' }}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ '& th': { bgcolor: '#f5f5f5', fontWeight: 'bold' } }}>
                    <TableCell>Account</TableCell>
                    <TableCell>Account wording</TableCell>
                    <TableCell>Ledger type</TableCell>
                    <TableCell>Portfolio</TableCell>
                    <TableCell>CCF</TableCell>
                    <TableCell>CA RIS</TableCell>
                    <TableCell>Target branch</TableCell>
                    <TableCell>SOGA counter</TableCell>
                    <TableCell>Amount debit</TableCell>
                    <TableCell>Amount credit</TableCell>
                    <TableCell>Comment</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gridTwoData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        '&:nth-of-type(1)': { bgcolor: '#fff9c4' }
                      }}
                    >
                      <TableCell>{row.account}</TableCell>
                      <TableCell>{row.accountWording}</TableCell>
                      <TableCell>{row.ledgerType}</TableCell>
                      <TableCell>{row.portfolio}</TableCell>
                      <TableCell>{row.ccf}</TableCell>
                      <TableCell>{row.caRis}</TableCell>
                      <TableCell>{row.targetBranch}</TableCell>
                      <TableCell>{row.sogaCounter}</TableCell>
                      <TableCell>{row.amountDebit}</TableCell>
                      <TableCell>{row.amountCredit}</TableCell>
                      <TableCell>{row.comment}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {/* Footer */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, pt: 2, borderTop: '1px solid #e0e0e0' }}>
            <Typography variant="body2" color="text.secondary">
              © Société Générale Group 2023
            </Typography>
            <Box>
              <Typography variant="body2" color="text.secondary" component="span" sx={{ mr: 2 }}>
                Accessibility: not compliant
              </Typography>
              <Typography variant="body2" color="text.secondary" component="span" sx={{ mr: 2 }}>
                Legal notices
              </Typography>
              <Typography variant="body2" color="text.secondary" component="span">
                Contact
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box >
    </LocalizationProvider>

  );
};

export default SocieteGeneraleApp;
