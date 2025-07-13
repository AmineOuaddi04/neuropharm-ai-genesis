
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Brain, Dna, Stethoscope, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Dna className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">NeuroPharm-AI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Características</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Acerca de</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/login">Acceder</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
          Farmacogenómica + IA Generativa
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Prescripción Médica
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            {" "}Personalizada
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Plataforma de prescripción basada en farmacogenómica, potenciada por IA, 
          con trazabilidad blockchain para profesionales de la salud y pacientes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/login">
              Acceso Pacientes <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8" asChild>
            <Link to="/login">Para Profesionales</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Dna className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Análisis Genético</CardTitle>
              <CardDescription>
                Procesamiento de perfiles farmacogenéticos (CYP2D6, CYP2C9, VKORC1, TPMT)
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>IA Médica</CardTitle>
              <CardDescription>
                Recomendaciones personalizadas basadas en GPT-4, MedPaLM 2 y guías CPIC
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Blockchain</CardTitle>
              <CardDescription>
                Trazabilidad completa y seguridad de datos con Hyperledger Fabric
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Panel Médico</CardTitle>
              <CardDescription>
                Acceso profesional para validación y prescripción de tratamientos
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Informes PDF</CardTitle>
              <CardDescription>
                Generación de informes clínicos con validación QR y blockchain
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <CardTitle>Multi-Usuario</CardTitle>
              <CardDescription>
                Pacientes, médicos y hospitales en una plataforma unificada
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Revoluciona la Prescripción Médica
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a la nueva era de la medicina personalizada
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link to="/login">
              Empezar Ahora <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Dna className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">NeuroPharm-AI</span>
              </div>
              <p className="text-gray-400">
                Medicina personalizada basada en farmacogenómica e IA
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/search" className="hover:text-white transition-colors">Búsqueda</Link></li>
                <li><Link to="/reports" className="hover:text-white transition-colors">Informes</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Profesionales</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/medical" className="hover:text-white transition-colors">Panel Médico</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Hospitales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Farmacias</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NeuroPharm-AI. Todos los derechos reservados. GDPR & HIPAA Compliant.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
