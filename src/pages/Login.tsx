import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Stethoscope, User, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('patient');
  
  const { login, isAuthenticated, user } = useAuth();
  const location = useLocation();
  const { toast } = useToast();

  const from = location.state?.from?.pathname || 
    (user?.role === 'medical' ? '/dashboard-medico' : '/dashboard-paciente');

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Modify email based on selected tab for demo purposes
      const loginEmail = activeTab === 'medical' ? 
        (email.includes('med') ? email : `med.${email}`) : 
        email;
      
      await login(loginEmail, password);
      
      toast({
        title: "Inicio de sesión exitoso",
        description: `Bienvenido a NeuroPharm-AI`,
      });
    } catch (error) {
      toast({
        title: "Error de autenticación",
        description: "Por favor verifica tus credenciales",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (role: 'patient' | 'medical') => {
    if (role === 'medical') {
      setEmail('doctor@hospital.com');
      setPassword('demo123');
      setActiveTab('medical');
    } else {
      setEmail('paciente@example.com');
      setPassword('demo123');
      setActiveTab('patient');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">NeuroPharm-AI</h1>
          <p className="text-muted-foreground">Prescripción personalizada con IA</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>
              Accede a tu cuenta para continuar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="patient" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Paciente
                </TabsTrigger>
                <TabsTrigger value="medical" className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Médico
                </TabsTrigger>
              </TabsList>

              <TabsContent value="patient" className="space-y-4">
                <Alert>
                  <AlertDescription>
                    Demo: use cualquier email y contraseña, o 
                    <Button variant="link" onClick={() => handleDemoLogin('patient')} className="h-auto p-0 ml-1">
                      haga clic aquí
                    </Button>
                  </AlertDescription>
                </Alert>
              </TabsContent>

              <TabsContent value="medical" className="space-y-4">
                <Alert>
                  <AlertDescription>
                    Demo: use cualquier email con "med" y contraseña, o 
                    <Button variant="link" onClick={() => handleDemoLogin('medical')} className="h-auto p-0 ml-1">
                      haga clic aquí
                    </Button>
                  </AlertDescription>
                </Alert>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={activeTab === 'medical' ? 'doctor@hospital.com' : 'paciente@example.com'}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Tu contraseña"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;