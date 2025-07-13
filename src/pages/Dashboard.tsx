
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, FileText, Dna, Brain, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard del Paciente</h1>
          <p className="text-gray-600">Gestiona tu perfil genético y consulta recomendaciones personalizadas</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Perfil Genético</CardTitle>
              <Dna className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Completo</div>
              <p className="text-xs text-muted-foreground">12 genes analizados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Evaluaciones IA</CardTitle>
              <Brain className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertas Activas</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">2</div>
              <p className="text-xs text-muted-foreground">Requieren atención</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Informes</CardTitle>
              <FileText className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">Generados</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Genetic Profile Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Perfil Genético
                </CardTitle>
                <CardDescription>
                  Sube tu archivo genético (.vcf, .txt, .csv) para análisis farmacogenómico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">Arrastra tu archivo aquí</p>
                  <p className="text-gray-500 mb-4">o haz clic para seleccionar</p>
                  <Button>Seleccionar Archivo</Button>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  Formatos soportados: VCF, TXT, CSV • Máximo 10MB • Cifrado AES-256
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Actividad Reciente</CardTitle>
                <CardDescription>Últimas evaluaciones y consultas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Evaluación de Warfarina completada</p>
                      <p className="text-sm text-gray-500">Compatible - Dosis estándar recomendada</p>
                    </div>
                    <span className="text-sm text-gray-400">Hace 2 horas</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Alerta: Codeína</p>
                      <p className="text-sm text-gray-500">Metabolizador ultra-rápido detectado</p>
                    </div>
                    <span className="text-sm text-gray-400">Ayer</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="font-medium">Informe generado</p>
                      <p className="text-sm text-gray-500">Evaluación farmacogenómica completa</p>
                    </div>
                    <span className="text-sm text-gray-400">Hace 3 días</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medication Search */}
            <Card>
              <CardHeader>
                <CardTitle>Búsqueda Rápida de Medicamentos</CardTitle>
                <CardDescription>Evalúa la compatibilidad de cualquier medicamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Ej: Warfarina, Codeína, Omeprazol..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button asChild>
                    <Link to="/search">Evaluar</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Genetic Profile Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resumen Genético</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">CYP2D6</span>
                    <Badge variant="secondary">Normal</Badge>
                  </div>
                  <div className="text-xs text-gray-500">Metabolizador normal</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">CYP2C9</span>
                    <Badge variant="destructive">Lento</Badge>
                  </div>
                  <div className="text-xs text-gray-500">Metabolizador lento</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">VKORC1</span>
                    <Badge className="bg-orange-500">Intermedio</Badge>
                  </div>
                  <div className="text-xs text-gray-500">Sensibilidad intermedia</div>
                </div>
                
                <Button variant="outline" className="w-full" size="sm">
                  Ver Perfil Completo
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/search">
                    <Brain className="w-4 h-4 mr-2" />
                    Consultar IA Médica
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/reports">
                    <FileText className="w-4 h-4 mr-2" />
                    Generar Informe
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Actualizar Perfil
                </Button>
              </CardContent>
            </Card>

            {/* Health Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Métricas de Salud</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Compatibilidad Media</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Perfil Completo</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                
                <div className="text-xs text-gray-500 mt-4">
                  Última actualización: Hace 2 días
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
