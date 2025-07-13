
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Share2, QrCode, Calendar, User, Stethoscope, Shield } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: "Evaluación Farmacogenómica Completa",
      date: "2024-01-15",
      type: "Perfil Genético",
      status: "Completado",
      medications: 12,
      pages: 8
    },
    {
      id: 2,
      title: "Análisis de Warfarina",
      date: "2024-01-10",
      type: "Medicamento Específico",
      status: "Validado",
      medications: 1,
      pages: 3
    },
    {
      id: 3,
      title: "Panel Cardiovascular",
      date: "2024-01-05",
      type: "Especialidad",
      status: "Pendiente",
      medications: 8,
      pages: 6
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado": return "bg-green-100 text-green-800";
      case "Validado": return "bg-blue-100 text-blue-800";
      case "Pendiente": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Informes y Reportes</h1>
          <p className="text-gray-600">Genera y gestiona informes farmacogenómicos con validación blockchain</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Report Generator */}
          <div className="lg:col-span-2 space-y-6">
            {/* Generate New Report */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Generar Nuevo Informe
                </CardTitle>
                <CardDescription>
                  Crea informes personalizados basados en tu perfil genético
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed border-2">
                    <CardContent className="text-center py-6">
                      <User className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-medium mb-1">Informe Personal</h3>
                      <p className="text-sm text-gray-600">Para uso del paciente</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed border-2">
                    <CardContent className="text-center py-6">
                      <Stethoscope className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <h3 className="font-medium mb-1">Informe Médico</h3>
                      <p className="text-sm text-gray-600">Para profesionales</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Informe
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Evaluación Completa</option>
                      <option>Medicamento Específico</option>
                      <option>Panel por Especialidad</option>
                      <option>Seguimiento Terapéutico</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Medicamentos a Incluir
                    </label>
                    <textarea 
                      placeholder="Ej: Warfarina, Clopidogrel, Omeprazol..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="blockchain" className="rounded" />
                    <label htmlFor="blockchain" className="text-sm text-gray-700">
                      Incluir certificación blockchain
                    </label>
                  </div>
                </div>
                
                <Button className="w-full mt-6" size="lg">
                  <FileText className="w-4 h-4 mr-2" />
                  Generar Informe
                </Button>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Informes Recientes</CardTitle>
                <CardDescription>Historial de informes generados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-medium text-gray-900">{report.title}</h3>
                          <p className="text-sm text-gray-600">{report.type}</p>
                        </div>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {report.date}
                        </div>
                        <div>
                          {report.medications} medicamentos
                        </div>
                        <div>
                          {report.pages} páginas
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Descargar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-1" />
                          Compartir
                        </Button>
                        <Button variant="outline" size="sm">
                          <QrCode className="w-4 h-4 mr-1" />
                          QR
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Report Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-gray-600">Informes Generados</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-semibold text-green-600">8</div>
                    <div className="text-xs text-gray-600">Validados</div>
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-orange-600">2</div>
                    <div className="text-xs text-gray-600">Pendientes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5" />
                  Seguridad Blockchain
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Trazabilidad activa</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Cifrado AES-256</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>GDPR Compliant</span>
                </div>
                
                <div className="text-xs text-gray-500 mt-4">
                  Hash actual: 0xa1b2c3d4e5f6...
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Informe Rápido
                </Button>
                
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir con Médico
                </Button>
                
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar Todo
                </Button>
              </CardContent>
            </Card>

            {/* Template Library */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Plantillas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm space-y-1">
                  <div className="cursor-pointer hover:text-blue-600">• Cardiología</div>
                  <div className="cursor-pointer hover:text-blue-600">• Psiquiatría</div>
                  <div className="cursor-pointer hover:text-blue-600">• Oncología</div>
                  <div className="cursor-pointer hover:text-blue-600">• Dolor Crónico</div>
                  <div className="cursor-pointer hover:text-blue-600">• Pediatría</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
