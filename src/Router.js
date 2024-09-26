import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpenseTracker from './Pages/ExpenseTracker/ExpenseTracker';
import InvestmentTracker from './Pages/InvestmentTracker/InvestmentTracker';
import SavingsTracker from './Pages/SavingsTracker/SavingsTracker';
import DebtTracker from './Pages/DebtTracker/DebtTracker';
import Dashboard from './Pages/Dashboard';


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/investments" element={<InvestmentTracker />} />
                <Route path="/expense" element={<ExpenseTracker />} />
                <Route path="/debt" element={<DebtTracker />} />
                <Route path="/savings" element={<SavingsTracker />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router