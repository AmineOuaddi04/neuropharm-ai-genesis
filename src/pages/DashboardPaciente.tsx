import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  FileText, 
  Shield, 
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
  Dna,
  Pill,
  Activity,
  Users,
  LogOut
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardPaciente: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [hasGeneticData, setHasGeneticData] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.vcf')) {
      toast({
        title: "Formato de archivo inválido",
        description: "Por favor, sube un archivo .vcf válido",
        variant: "destructive",
      });
      return;
    }

    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setHasGeneticData(true);
          toast({
            title: "Archivo subido exitosamente",
            description: "Tu perfil genético ha sido procesado",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión exitosamente",
    });
  };

  const mockGeneticResults = [
    { gene: 'CYP2D6', genotype: '*1/*4', phenotype: 'Metabolizador intermedio', risk: 'medio', medications: ['Codeína', 'Tramadol'] },
    { gene: 'CYP2C9', genotype: '*1/*1', phenotype: 'Metabolizador normal', risk: 'bajo', medications: ['Warfarina'] },
    { gene: 'VKORC1', genotype: 'AG', phenotype: 'Sensibilidad intermedia', risk: 'medio', medications: ['Warfarina'] },
    { gene: 'TPMT', genotype: '*1/*1', phenotype: 'Actividad normal', risk: 'bajo', medications: ['6-Mercaptopurina'] },
  ];

  const mockReports = [
    { id: '1', date: '2024-01-15', medications: ['Paracetamol', 'Ibuprofeno'], status: 'completado' },
    { id: '2', date: '2024-01-10', medications: ['Omeprazol'], status: 'pendiente' },
  ];

  const mockPermissions = [
    { doctor: 'Dr. García López', specialty: 'Cardiología', expires: '2024-02-15', status: 'activo' },
    { doctor: 'Dra. Martín Silva', specialty: 'Medicina Interna', expires: '2024-01-30', status: 'activo' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">NeuroPharm-AI</h1>
            <p className="text-sm text-muted-foreground">Panel de Paciente</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">{user?.firstName} {user?.lastName}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="genetic">Perfil Genético</TabsTrigger>
            <TabsTrigger value="reports">Informes</TabsTrigger>
            <TabsTrigger value="permissions">Permisos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Perfil Genético</CardTitle>
                  <Dna className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {hasGeneticData ? 'Completado' : 'Pendiente'}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {hasGeneticData ? '4 genes analizados' : 'Sube tu archivo .vcf'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Informes Generados</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">
                    1 pendiente de validación
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Accesos Médicos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">
                    Médicos con acceso activo
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Upload Section */}
            {!hasGeneticData && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Subir Perfil Genético
                  </CardTitle>
                  <CardDescription>
                    Sube tu archivo .vcf para comenzar el análisis farmacogenómico
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <input
                      type="file"
                      accept=".vcf"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="genetic-upload"
                    />
                    <label htmlFor="genetic-upload">
                      <Button variant="outline" className="cursor-pointer">
                        Seleccionar archivo .vcf
                      </Button>
                    </label>
                    <p className="text-sm text-muted-foreground mt-2">
                      Máximo 50MB • Formatos: .vcf
                    </p>
                  </div>
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subiendo archivo...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <Progress value={uploadProgress} />
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Actividad Reciente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Informe farmacogenómico generado</p>
                      <p className="text-xs text-muted-foreground">Hace 2 días</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Validación médica pendiente</p>
                      <p className="text-xs text-muted-foreground">Hace 3 días</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="genetic" className="space-y-6">
            {hasGeneticData ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Resultados del Análisis Genético</CardTitle>
                    <CardDescription>
                      Interpretación de variantes farmacogenéticas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockGeneticResults.map((result) => (
                        <div key={result.gene} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">{result.gene}</h4>
                              <p className="text-sm text-muted-foreground">
                                Genotipo: {result.genotype}
                              </p>
                            </div>
                            <Badge variant={
                              result.risk === 'bajo' ? 'secondary' : 
                              result.risk === 'medio' ? 'default' : 'destructive'
                            }>
                              Riesgo {result.risk}
                            </Badge>
                          </div>
                          <p className="text-sm mb-2">
                            <strong>Fenotipo:</strong> {result.phenotype}
                          </p>
                          <p className="text-sm">
                            <strong>Medicamentos afectados:</strong> {result.medications.join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Dna className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No hay datos genéticos</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Sube tu archivo .vcf para ver el análisis de tu perfil genético
                  </p>
                  <Button>
                    <Upload className="h-4 w-4 mr-2" />
                    Subir archivo
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informes Farmacogenómicos</CardTitle>
                <CardDescription>
                  Historial de informes y evaluaciones médicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockReports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">Informe #{report.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {report.date} • {report.medications.join(', ')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={report.status === 'completado' ? 'secondary' : 'default'}>
                          {report.status}
                        </Badge>
                        {report.status === 'completado' && (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="permissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Control de Acceso
                </CardTitle>
                <CardDescription>
                  Gestiona qué médicos pueden acceder a tus datos genéticos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPermissions.map((permission, index) => (
                    <div key={index} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium">{permission.doctor}</p>
                        <p className="text-sm text-muted-foreground">
                          {permission.specialty} • Expira: {permission.expires}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{permission.status}</Badge>
                        <Button size="sm" variant="outline">
                          Revocar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPaciente;