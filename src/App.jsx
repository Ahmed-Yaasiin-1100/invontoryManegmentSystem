import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Inventory from "./pages/inventory/Inventory";
import PurchaseOrders from "./pages/purchase/PurchaseOrders";
import Suppliers from "./pages/suppliers/Suppliers";
import Customers from "./pages/customers/Customers";
import Reports from "./pages/reports/Reports";
import Settings  from "./pages/settings/Settings";


function App() {
  return (
    
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Pages */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Inventory />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/purchase-orders"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <PurchaseOrders />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/suppliers"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Suppliers />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Customers />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

           <Route
          path="/reports"
          element={
             <ProtectedRoute>
               <DashboardLayout>
                 <Reports/>
               </DashboardLayout>
             
             </ProtectedRoute>
           
          }
        />


           <Route
          path="/settings"
          element={
            
             <ProtectedRoute>
               <DashboardLayout>
                <Settings/>
               </DashboardLayout>
             
             </ProtectedRoute>
          }
        />

      </Routes>
  
  );
}

export default App;