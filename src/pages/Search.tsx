
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, AlertTriangle, CheckCircle, Info, Brain, Pill, TrendingUp, Heart } from "lucide-react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedication, setSelectedMedication] = useState(null);

  const medications = [
    {
      name: "Warfarina",
      commercial: "Coumadin",
      risk: "low",
      efficacy: 85,
      genes: ["CYP2C9", "VKORC1"],
      description: "Anticoagulante oral",
      alternatives: ["Dabigatrán", "Rivaroxabán"]
    },
    {
      name: "Codeína",
      commercial: "Tylenol #3",
      risk: "high",
      efficacy: 45,
      genes: ["CYP2D6"],
      description: "Analgésico opioide",
      alternatives: ["Tramadol", "Morfina"]
    },
    {
      name: "Clopidogrel",
      commercial: "Plavix",
      risk: "moderate",
      efficacy: 70,
      genes: ["CYP2C19"],
      description: "Antiagregante plaquetario",
      alternatives: ["Prasugrel", "Ticagrelor"]
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low": return "bg-green-100 text-green-800";
      case "moderate": return "bg-orange-100 text-orange-800";
      case "high": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "low": return <CheckCircle className="w-4 h-4" />;
      case "moderate": return <Info className="w-4 h-4" />;
      case "high": return <AlertTriangle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Búsqueda de Medicamentos</h1>
          <p className="text-gray-600">Evalúa la compatibilidad farmacogenómica de cualquier medicamento</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SearchIcon className="w-5 h-5" />
              Búsqueda Inteligente
            </CardTitle>
            <CardDescription>
              Busca por nombre genérico, comercial o habla con nuestra IA médica
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Ej: Warfarina, Coumadin, medicamento para el corazón..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-lg py-3"
                />
              </div>
              <Button size="lg" className="px-8">
                <SearchIcon className="w-4 h-4 mr-2" />
                Buscar
              </Button>
              <Button variant="outline" size="lg">
                <Brain className="w-4 h-4 mr-2" />
                Preguntar a IA
              </Button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Sugerencias: warfarina, codeína, omeprazol, simvastatina, clopidogrel
            </div>
          </CardContent>
        </Card>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Search Results */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Resultados de Búsqueda</h2>
            
            {medications.map((med, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedMedication === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedMedication(index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{med.name}</CardTitle>
                      <CardDescription>{med.commercial} • {med.description}</CardDescription>
                    </div>
                    <Badge className={getRiskColor(med.risk)}>
                      {getRiskIcon(med.risk)}
                      <span className="ml-1">
                        {med.risk === 'low' ? 'Bajo Riesgo' : 
                         med.risk === 'moderate' ? 'Riesgo Moderado' : 'Alto Riesgo'}
                      </span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Eficacia Esperada</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${med.efficacy}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{med.efficacy}%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Genes relevantes:</span>
                      {med.genes.map((gene, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {gene}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Analysis */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Análisis Detallado</h2>
            
            {selectedMedication !== null ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="w-5 h-5" />
                      {medications[selectedMedication].name}
                    </CardTitle>
                    <CardDescription>Evaluación farmacogenómica completa</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {medications[selectedMedication].efficacy}%
                        </div>
                        <div className="text-sm text-gray-600">Eficacia</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">Normal</div>
                        <div className="text-sm text-gray-600">Metabolismo</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Recomendación de la IA:</h4>
                      <div className="p-3 bg-blue-50 rounded-lg text-sm">
                        Basado en tu perfil genético CYP2C9 *1/*3 y VKORC1 AA, 
                        se recomienda iniciar con dosis estándar pero monitorear 
                        INR más frecuentemente durante las primeras semanas.
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Alternativas sugeridas:</h4>
                      <div className="space-y-2">
                        {medications[selectedMedication].alternatives.map((alt, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {alt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Monitoreo y Precauciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Monitoreo requerido</p>
                        <p className="text-sm text-gray-600">
                          Controles de INR semanales durante el primer mes
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Interacciones</p>
                        <p className="text-sm text-gray-600">
                          Evitar aspirina y antiinflamatorios no esteroideos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full" size="lg">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Generar Informe Completo
                </Button>
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <SearchIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Selecciona un medicamento para ver el análisis detallado
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
