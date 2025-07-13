
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Stethoscope, Users, FileText, Brain, AlertTriangle, CheckCircle, Clock, Search, User, Activity } from "lucide-react";

const Medical = () => {
  const patients = [
    {
      id: 1,
      name: "María García",
      age: 45,
      status: "active",
      lastVisit: "2024-01-15",
      risk: "low",
      medications: 3,
      alerts: 0
    },
    {
      id: 2,
      name: "Juan López",
      age: 62,
      status: "review",
      lastVisit: "2024-01-12",
      risk: "moderate",
      medications: 7,
      alerts: 2
    },
    {
      id: 3,
      name: "Ana Martínez",
      age: 38,
      status: "urgent",
      lastVisit: "2024-01-10",
      risk: "high",
      medications: 4,
      alerts: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "review": return "bg-orange-100 text-orange-800";
      case "urgent": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "text-green-600";
      case "moderate": return "text-orange-600";
      case "high": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel Médico</h1>
          <p className="text-gray-600">Gestiona pacientes y valida tratamientos farmacogenómicos</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pacientes Activos</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+2 este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Evaluaciones IA</CardTitle>
              <Brain className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Esta semana</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertas Pendientes</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">5</div>
              <p className="text-xs text-muted-foreground">Requieren revisión</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prescripciones</CardTitle>
              <FileText className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Patient Management */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Buscar Pacientes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <Input placeholder="Buscar por nombre, ID o medicamento..." />
                  </div>
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Buscar
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline" className="cursor-pointer">Todos</Badge>
                  <Badge variant="outline" className="cursor-pointer">Activos</Badge>
                  <Badge variant="outline" className="cursor-pointer">Revisión</Badge>
                  <Badge variant="outline" className="cursor-pointer">Urgente</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Patient List */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Pacientes</CardTitle>
                <CardDescription>Pacientes bajo tu cuidado con evaluación farmacogenómica</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <div key={patient.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">{patient.name}</h3>
                            <p className="text-sm text-gray-600">{patient.age} años</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status === 'active' ? 'Activo' : 
                           patient.status === 'review' ? 'Revisión' : 'Urgente'}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                        <div>
                          <span className="block text-xs text-gray-500">Última visita</span>
                          {patient.lastVisit}
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">Riesgo</span>
                          <span className={getRiskColor(patient.risk)}>
                            {patient.risk === 'low' ? 'Bajo' : 
                             patient.risk === 'moderate' ? 'Moderado' : 'Alto'}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">Medicamentos</span>
                          {patient.medications}
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">Alertas</span>
                          <span className={patient.alerts > 0 ? 'text-red-600' : 'text-green-600'}>
                            {patient.alerts}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Activity className="w-4 h-4 mr-1" />
                          Ver Perfil
                        </Button>
                        <Button variant="outline" size="sm">
                          <Brain className="w-4 h-4 mr-1" />
                          Evaluar IA
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-1" />
                          Prescribir
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Recomendaciones de IA
                </CardTitle>
                <CardDescription>Sugerencias basadas en análisis farmacogenómico</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Juan López - Warfarina</p>
                      <p className="text-sm text-gray-600">
                        Ajustar dosis a 3mg/día según genotipo CYP2C9 *1/*3
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">Aprobar</Button>
                        <Button size="sm" variant="outline">Modificar</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">Ana Martínez - Clopidogrel</p>
                      <p className="text-sm text-gray-600">
                        Considerar alternativa: paciente CYP2C19 pobre metabolizador
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline">Ver Alternativas</Button>
                        <Button size="sm" variant="outline">Consultar</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5" />
                  Agenda de Hoy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">09:00 - María García</span>
                    <Badge variant="outline" className="text-xs">Seguimiento</Badge>
                  </div>
                  <p className="text-gray-600 text-xs">Revisión warfarina</p>
                </div>
                
                <div className="text-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">10:30 - Juan López</span>
                    <Badge variant="outline" className="text-xs">Consulta</Badge>
                  </div>
                  <p className="text-gray-600 text-xs">Evaluación genética</p>
                </div>
                
                <div className="text-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">15:00 - Ana Martínez</span>
                    <Badge className="bg-red-100 text-red-800 text-xs">Urgente</Badge>
                  </div>
                  <p className="text-gray-600 text-xs">Reacción adversa</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Herramientas Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Brain className="w-4 h-4 mr-2" />
                  Consultor IA
                </Button>
                
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Nueva Prescripción
                </Button>
                
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Simulador Dosis
                </Button>
                
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Buscar Paciente
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actividad Reciente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Prescripción aprobada</span>
                  </div>
                  <p className="text-gray-600 text-xs ml-4">María García - Warfarina</p>
                </div>
                
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Evaluación IA completada</span>
                  </div>
                  <p className="text-gray-600 text-xs ml-4">Juan López - Panel cardiovascular</p>
                </div>
                
                <div className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="font-medium">Alerta generada</span>
                  </div>
                  <p className="text-gray-600 text-xs ml-4">Ana Martínez - Interacción detectada</p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Métricas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">94%</div>
                  <div className="text-sm text-gray-600">Adherencia IA</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-lg font-semibold text-blue-600">86%</div>
                    <div className="text-xs text-gray-600">Eficacia</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-purple-600">12</div>
                    <div className="text-xs text-gray-600">Horas/sem</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
