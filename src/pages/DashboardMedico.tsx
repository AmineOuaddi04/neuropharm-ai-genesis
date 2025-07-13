import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Stethoscope,
  Pill,
  Download,
  Edit,
  Eye,
  LogOut,
  UserCheck,
  Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardMedico: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión exitosamente",
    });
  };

  const handleApproveApproval = (patientId: string, treatmentId: string) => {
    toast({
      title: "Tratamiento aprobado",
      description: `Tratamiento validado para paciente ${patientId}`,
    });
  };

  const mockPatients = [
    {
      id: 'P001',
      name: 'María González',
      age: 45,
      lastVisit: '2024-01-15',
      geneticStatus: 'completado',
      riskLevel: 'medio',
      pendingTreatments: 1,
      allergies: ['Penicilina'],
      conditions: ['Hipertensión', 'Diabetes tipo 2']
    },
    {
      id: 'P002',
      name: 'Carlos Rodríguez',
      age: 62,
      lastVisit: '2024-01-12',
      geneticStatus: 'completado',
      riskLevel: 'alto',
      pendingTreatments: 2,
      allergies: ['Aspirina'],
      conditions: ['Cardiopatía isquémica']
    },
    {
      id: 'P003',
      name: 'Ana Martín',
      age: 38,
      lastVisit: '2024-01-10',
      geneticStatus: 'pendiente',
      riskLevel: 'bajo',
      pendingTreatments: 0,
      allergies: [],
      conditions: ['Migraña']
    }
  ];

  const mockTreatments = [
    {
      id: 'T001',
      patientId: 'P001',
      patientName: 'María González',
      medication: 'Warfarina',
      dosage: '5mg/día',
      aiRecommendation: 'Reducir dosis 25% por genotipo CYP2C9*1/*3',
      riskLevel: 'medio',
      status: 'pendiente',
      date: '2024-01-15'
    },
    {
      id: 'T002',
      patientId: 'P002',
      patientName: 'Carlos Rodríguez',
      medication: 'Clopidogrel',
      dosage: '75mg/día',
      aiRecommendation: 'Considerar alternativa por pobre metabolización CYP2C19',
      riskLevel: 'alto',
      status: 'pendiente',
      date: '2024-01-12'
    }
  ];

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-primary">NeuroPharm-AI</h1>
            <p className="text-sm text-muted-foreground">Panel Médico</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">{user?.firstName} {user?.lastName}</p>
              <p className="text-sm text-muted-foreground">
                {user?.institutionId} • {user?.email}
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="patients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="patients">Pacientes</TabsTrigger>
            <TabsTrigger value="treatments">Validaciones</TabsTrigger>
            <TabsTrigger value="prescriptions">Recetas</TabsTrigger>
            <TabsTrigger value="reports">Informes</TabsTrigger>
          </TabsList>

          <TabsContent value="patients" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Pacientes</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockPatients.length}</div>
                  <p className="text-xs text-muted-foreground">Bajo su cuidado</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Perfiles Genéticos</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockPatients.filter(p => p.geneticStatus === 'completado').length}
                  </div>
                  <p className="text-xs text-muted-foreground">Completados</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Validaciones Pendientes</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockTreatments.length}</div>
                  <p className="text-xs text-muted-foreground">Requieren atención</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Alertas de Riesgo</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockPatients.filter(p => p.riskLevel === 'alto').length}
                  </div>
                  <p className="text-xs text-muted-foreground">Pacientes alto riesgo</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Patient List */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Lista de Pacientes</CardTitle>
                    <CardDescription>
                      Gestione a sus pacientes y acceda a sus perfiles farmacogenómicos
                    </CardDescription>
                  </div>
                  <div className="relative w-72">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por nombre o ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredPatients.map((patient) => (
                    <div key={patient.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold">{patient.name}</h4>
                            <Badge variant="outline">{patient.id}</Badge>
                            <Badge variant={
                              patient.riskLevel === 'alto' ? 'destructive' :
                              patient.riskLevel === 'medio' ? 'default' : 'secondary'
                            }>
                              Riesgo {patient.riskLevel}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                            <div>
                              <span className="font-medium">Edad:</span> {patient.age} años
                            </div>
                            <div>
                              <span className="font-medium">Última visita:</span> {patient.lastVisit}
                            </div>
                            <div>
                              <span className="font-medium">Perfil genético:</span> {patient.geneticStatus}
                            </div>
                            <div>
                              <span className="font-medium">Tratamientos pendientes:</span> {patient.pendingTreatments}
                            </div>
                          </div>
                          {patient.conditions.length > 0 && (
                            <div className="mt-2">
                              <span className="text-sm font-medium">Condiciones: </span>
                              {patient.conditions.map((condition, idx) => (
                                <Badge key={idx} variant="outline" className="mr-1">
                                  {condition}
                                </Badge>
                              ))}
                            </div>
                          )}
                          {patient.allergies.length > 0 && (
                            <div className="mt-2 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-500" />
                              <span className="text-sm font-medium text-red-600">
                                Alergias: {patient.allergies.join(', ')}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Ver perfil
                          </Button>
                          <Button size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Editar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treatments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Validaciones de Tratamiento IA
                </CardTitle>
                <CardDescription>
                  Revise y valide las recomendaciones farmacogenómicas de la IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTreatments.map((treatment) => (
                    <div key={treatment.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold">{treatment.patientName}</h4>
                            <Badge variant="outline">{treatment.patientId}</Badge>
                            <Badge variant={treatment.riskLevel === 'alto' ? 'destructive' : 'default'}>
                              Riesgo {treatment.riskLevel}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                            <div>
                              <span className="font-medium">Medicamento:</span> {treatment.medication}
                            </div>
                            <div>
                              <span className="font-medium">Dosis propuesta:</span> {treatment.dosage}
                            </div>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg mb-3">
                            <h5 className="font-medium text-blue-900 mb-1">Recomendación IA:</h5>
                            <p className="text-sm text-blue-800">{treatment.aiRecommendation}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => handleApproveApproval(treatment.patientId, treatment.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Aprobar
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4 mr-2" />
                          Modificar
                        </Button>
                        <Button size="sm" variant="destructive">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Rechazar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prescriptions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="h-5 w-5" />
                  Recetas Digitales
                </CardTitle>
                <CardDescription>
                  Genere y gestione recetas personalizadas con validación farmacogenómica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="mb-4">
                  <Pill className="h-4 w-4 mr-2" />
                  Nueva Receta
                </Button>
                <div className="text-center py-12 text-muted-foreground">
                  <Pill className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>No hay recetas recientes</p>
                  <p className="text-sm">Las recetas generadas aparecerán aquí</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Informes y Exportaciones
                </CardTitle>
                <CardDescription>
                  Genere informes clínicos y exporte datos en formato FHIR
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exportar a FHIR
                  </Button>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Informe Institucional
                  </Button>
                </div>
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>No hay informes generados</p>
                  <p className="text-sm">Los informes exportados aparecerán aquí</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardMedico;