
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import DashboardPaciente from "./pages/DashboardPaciente";
import DashboardMedico from "./pages/DashboardMedico";
import Search from "./pages/Search";
import Reports from "./pages/Reports";
import Medical from "./pages/Medical";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected Patient Routes */}
            <Route 
              path="/dashboard-paciente" 
              element={
                <ProtectedRoute requiredRole="patient">
                  <DashboardPaciente />
                </ProtectedRoute>
              } 
            />
            
            {/* Protected Medical Routes */}
            <Route 
              path="/dashboard-medico" 
              element={
                <ProtectedRoute requiredRole="medical">
                  <DashboardMedico />
                </ProtectedRoute>
              } 
            />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/dashboard" element={<Navigate to="/login" replace />} />
            <Route path="/search" element={<Search />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
