'use client'

import { useState } from 'react'
import { Phone, MapPin, ChevronDown, ChevronUp, MessageCircle, Shield, Star, ArrowLeft, ArrowRight, Menu, X } from 'lucide-react'

interface Product {
  name: string
  specs: string
  price: string
  category: string
  warranty?: string
}

const products: Product[] = [
  // Realme
  { name: "Realme Note 60", specs: "4GB RAM / 128GB", price: "860,00", category: "Realme", warranty: "1 Ano de garantia" },
  { name: "Realme Note 60X", specs: "4GB RAM / 128GB", price: "850,00", category: "Realme", warranty: "1 Ano de garantia" },
  { name: "Realme C61", specs: "4GB RAM / 128GB", price: "950,00", category: "Realme", warranty: "1 Ano de garantia" },
  { name: "Realme C75", specs: "8GB RAM / 256GB", price: "1.320,00", category: "Realme", warranty: "1 Ano de garantia" },
  
  // Redmi
  { name: "Redmi A5", specs: "3GB RAM / 64GB", price: "780,00", category: "Redmi" },
  { name: "Redmi A5", specs: "4GB RAM / 128GB", price: "860,00", category: "Redmi" },
  { name: "Redmi 13", specs: "8GB RAM / 256GB", price: "1.070,00", category: "Redmi" },
  { name: "Redmi 14C", specs: "4+4GB RAM / 128GB", price: "950,00", category: "Redmi" },
  { name: "Redmi 14C", specs: "8+8GB RAM / 256GB", price: "1.050,00", category: "Redmi" },
  { name: "Redmi 15C", specs: "4+4GB RAM / 128GB", price: "1.060,00", category: "Redmi" },
  { name: "Redmi 15C", specs: "8GB RAM / 256GB", price: "1.170,00", category: "Redmi" },
  { name: "Redmi Note 14", specs: "6GB RAM / 128GB", price: "1.180,00", category: "Redmi" },
  { name: "Redmi Note 14", specs: "8GB RAM / 256GB", price: "1.300,00", category: "Redmi" },
  { name: "Redmi Note 14S", specs: "8GB RAM / 256GB", price: "1.470,00", category: "Redmi" },
  { name: "Redmi Note 14 5G", specs: "8GB RAM / 256GB", price: "1.570,00", category: "Redmi" },
  { name: "Redmi Note 14 Pro 4G", specs: "8GB RAM / 256GB", price: "1.550,00", category: "Redmi" },
  { name: "Redmi Note 14 Pro 5G", specs: "8GB RAM / 256GB", price: "1.810,00", category: "Redmi" },
  { name: "Redmi Note 14 Pro+", specs: "8GB RAM / 256GB 5G", price: "2.110,00", category: "Redmi" },
  { name: "Redmi Note 14 Pro+", specs: "12GB RAM / 512GB", price: "2.430,00", category: "Redmi" },
  
  // POCO
  { name: "POCO C71", specs: "3GB RAM / 64GB", price: "780,00", category: "POCO" },
  { name: "POCO C71", specs: "4GB RAM / 128GB", price: "830,00", category: "POCO" },
  { name: "POCO C75", specs: "8GB RAM / 256GB", price: "1.050,00", category: "POCO" },
  { name: "POCO M7 Pro", specs: "8GB RAM / 256GB 5G", price: "1.410,00", category: "POCO" },
  { name: "POCO M7 Pro", specs: "12GB RAM / 256GB 5G", price: "1.500,00", category: "POCO" },
  { name: "POCO M7 Pro", specs: "12GB RAM / 512GB 5G", price: "1.600,00", category: "POCO" },
  { name: "POCO X7", specs: "8GB RAM / 256GB 5G", price: "1.630,00", category: "POCO" },
  { name: "POCO X7", specs: "12GB RAM / 512GB 5G", price: "1.840,00", category: "POCO" },
  { name: "POCO X7 Pro", specs: "8GB RAM / 256GB 5G", price: "1.970,00", category: "POCO" },
  { name: "POCO X7 Pro", specs: "12GB RAM / 512GB 5G", price: "2.210,00", category: "POCO" },
  
  // iPhone Seminovo
  { name: "iPhone 16 Pro Max", specs: "256GB", price: "6.350,00", category: "iPhone Seminovo" },
  { name: "iPhone 16 Pro", specs: "128GB", price: "5.250,00", category: "iPhone Seminovo" },
  { name: "iPhone 16 Plus", specs: "128GB", price: "4.850,00", category: "iPhone Seminovo" },
  { name: "iPhone 15 Pro Max", specs: "1TB", price: "5.650,00", category: "iPhone Seminovo" },
  { name: "iPhone 15 Pro Max", specs: "512GB", price: "5.250,00", category: "iPhone Seminovo" },
  { name: "iPhone 15 Pro Max", specs: "256GB", price: "5.150,00", category: "iPhone Seminovo" },
  { name: "iPhone 15 Pro Max 100%🔋", specs: "256GB", price: "4.800,00", category: "iPhone Seminovo" },
  { name: "iPhone 15 Pro", specs: "256GB", price: "4.700,00", category: "iPhone Seminovo" },
  { name: "iPhone 15 Pro", specs: "128GB", price: "4.450,00", category: "iPhone Seminovo" },
  { name: "iPhone 15", specs: "128GB", price: "3.550,00", category: "iPhone Seminovo" },
  { name: "iPhone 14 Pro Max", specs: "256GB", price: "4.100,00", category: "iPhone Seminovo" },
  { name: "iPhone 14 Pro Max", specs: "128GB", price: "3.750,00", category: "iPhone Seminovo" },
  { name: "iPhone 14 Pro", specs: "256GB", price: "3.680,00", category: "iPhone Seminovo" },
  { name: "iPhone 14 Pro", specs: "128GB", price: "3.450,00", category: "iPhone Seminovo" },
  { name: "iPhone 14", specs: "128GB", price: "2.650,00", category: "iPhone Seminovo" },
  { name: "iPhone 13 Pro Max", specs: "256GB", price: "3.450,00", category: "iPhone Seminovo" },
  { name: "iPhone 13 Pro Max", specs: "128GB", price: "3.150,00", category: "iPhone Seminovo" },
  { name: "iPhone 13 Pro", specs: "128GB", price: "2.900,00", category: "iPhone Seminovo" },
  { name: "iPhone 13", specs: "256GB", price: "2.550,00", category: "iPhone Seminovo" },
  { name: "iPhone 13", specs: "128GB", price: "2.400,00", category: "iPhone Seminovo" },
  { name: "iPhone 12 Pro Max", specs: "256GB", price: "2.800,00", category: "iPhone Seminovo" },
  { name: "iPhone 12 Pro Max", specs: "128GB", price: "2.600,00", category: "iPhone Seminovo" },
  { name: "iPhone 12 Pro", specs: "128GB", price: "2.280,00", category: "iPhone Seminovo" },
  { name: "iPhone 12", specs: "128GB", price: "1.930,00", category: "iPhone Seminovo" },
  { name: "iPhone 11", specs: "128GB", price: "1.730,00", category: "iPhone Seminovo" },
  { name: "iPhone 11", specs: "64GB", price: "1.700,00", category: "iPhone Seminovo" },
  
  // iPhone Lacrado
  { name: "iPhone 17 Pro Max", specs: "512GB E-SIM", price: "12.950,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Pro Max", specs: "256GB E-SIM", price: "11.450,00", category: "iPhone Lacrado" },
  { name: "iPhone 17 Pro", specs: "512GB E-SIM", price: "10.750,00", category: "iPhone Lacrado" },
  { name: "iPhone 17 Pro", specs: "256GB E-SIM", price: "10.350,00", category: "iPhone Lacrado" },
  { name: "iPhone 17", specs: "256GB E-SIM", price: "8.450,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Pro Max", specs: "256GB com chip", price: "7.800,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Pro Max", specs: "256GB E-SIM", price: "7.000,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Pro Max", specs: "1TB E-SIM", price: "9.450,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Pro Max", specs: "512GB E-SIM", price: "8.750,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Pro", specs: "256GB E-SIM", price: "6.950,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Pro", specs: "128GB E-SIM", price: "5.950,00", category: "iPhone Lacrado" },
  { name: "iPhone 16 Plus", specs: "128GB", price: "5.200,00", category: "iPhone Lacrado" },
  { name: "iPhone 16", specs: "256GB", price: "4.050,00", category: "iPhone Lacrado" },
  { name: "iPhone 16", specs: "128GB", price: "3.600,00", category: "iPhone Lacrado" },
  { name: "iPhone 15", specs: "256GB Esim+Chip", price: "5.150,00", category: "iPhone Lacrado" },
  { name: "iPhone 15 Plus", specs: "128GB Esim+Chip ANATEL", price: "4.500,00", category: "iPhone Lacrado" },
  { name: "iPhone 15", specs: "128GB Esim+Chip", price: "4.050,00", category: "iPhone Lacrado" },
  { name: "iPhone 14", specs: "128GB ANATEL", price: "3.600,00", category: "iPhone Lacrado" },
  { name: "iPhone 14", specs: "128GB CH", price: "3.550,00", category: "iPhone Lacrado" },
  { name: "iPhone 13", specs: "128GB Esim+Chip", price: "3.130,00", category: "iPhone Lacrado" },
  
  // CPO
  { name: "iPhone 11 CPO", specs: "128GB", price: "2.750,00", category: "CPO" },
]

const clientImages = [
  "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/784625bc-e3cc-461e-891d-19f80c20198f.png",
  "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/10088770-1455-4ade-a838-3000fc901dd0.png",
  "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/f649d843-6cec-4d00-b8db-fe0c05224aa2.png",
  "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/76319b40-96a9-49af-95ee-216b6adf1be6.png",
]

export default function JVCelularesPage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [maintenanceForm, setMaintenanceForm] = useState({
    name: '',
    model: '',
    problem: ''
  })

  const categories = ['Todos', 'Realme', 'Redmi', 'POCO', 'iPhone Seminovo', 'iPhone Lacrado', 'CPO']
  
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5513996462348?text=${encodedMessage}`, '_blank')
  }

  const handleProductInterest = (productName: string) => {
    openWhatsApp(`Olá, tenho interesse no ${productName}`)
  }

  const handleMaintenanceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá, preciso de manutenção para meu celular:
Nome: ${maintenanceForm.name}
Modelo: ${maintenanceForm.model}
Problema: ${maintenanceForm.problem}`
    openWhatsApp(message)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % clientImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + clientImages.length) % clientImages.length)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Realme':
        return '🌼'
      case 'Redmi':
        return '🔸'
      case 'POCO':
        return '⚫️'
      case 'iPhone Seminovo':
        return '📱'
      case 'iPhone Lacrado':
        return '📱'
      case 'CPO':
        return '⛔️'
      default:
        return '📱'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c9a61cfa-70ed-4a5c-af52-6de8470d803b.jpg" 
                alt="JV Celulares e Acessórios" 
                className="h-12 w-12 rounded-lg shadow-md"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800">JV CELULARES</h1>
                <p className="text-sm text-green-600">& ACESSÓRIOS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#produtos" className="text-gray-700 hover:text-green-600 transition-colors">Produtos</a>
              <a href="#manutencao" className="text-gray-700 hover:text-green-600 transition-colors">Manutenção</a>
              <a href="#clientes" className="text-gray-700 hover:text-green-600 transition-colors">Clientes</a>
              <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors">Contato</a>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={() => openWhatsApp('Olá! Gostaria de mais informações.')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <a href="#produtos" className="text-gray-700 hover:text-green-600 transition-colors py-2">Produtos</a>
                <a href="#manutencao" className="text-gray-700 hover:text-green-600 transition-colors py-2">Manutenção</a>
                <a href="#clientes" className="text-gray-700 hover:text-green-600 transition-colors py-2">Clientes</a>
                <a href="#contato" className="text-gray-700 hover:text-green-600 transition-colors py-2">Contato</a>
                <button
                  onClick={() => openWhatsApp('Olá! Gostaria de mais informações.')}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              JV CELULARES E ACESSÓRIOS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              A sua loja de confiança no Guarujá
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openWhatsApp('Olá! Gostaria de ver os produtos disponíveis.')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Ver Produtos
              </button>
              <button
                onClick={() => window.open('https://maps.google.com/?q=JV+Celulares+Guarujá', '_blank')}
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
              >
                <MapPin className="w-5 h-5 inline mr-2" />
                Localização
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Produtos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encontre o celular ideal para você com os melhores preços e garantia
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getCategoryIcon(category)} {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-4 md:gap-6">
            {filteredProducts.map((product, index) => {
              const productKey = `${product.name}-${product.specs}-${index}`
              const isExpanded = expandedProduct === productKey
              
              return (
                <div
                  key={productKey}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedProduct(isExpanded ? null : productKey)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getCategoryIcon(product.category)}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500">{product.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600 font-bold text-lg">
                          R$ {product.price}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <div className="pt-4 space-y-3">
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">
                            Especificações: {product.specs}
                          </span>
                        </div>
                        {product.warranty && (
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-gray-600">
                              {product.warranty}
                            </span>
                          </div>
                        )}
                        <div className="pt-2">
                          <button
                            onClick={() => handleProductInterest(product.name)}
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                          >
                            <MessageCircle className="w-4 h-4 inline mr-2" />
                            Tenho Interesse
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section id="manutencao" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Manutenção de Celular
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Problemas com seu celular? Nossa equipe especializada está pronta para ajudar!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleMaintenanceSubmit} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={maintenanceForm.name}
                    onChange={(e) => setMaintenanceForm({...maintenanceForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                    Modelo do Celular
                  </label>
                  <input
                    type="text"
                    id="model"
                    required
                    value={maintenanceForm.model}
                    onChange={(e) => setMaintenanceForm({...maintenanceForm, model: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Ex: iPhone 13, Samsung Galaxy S21, etc."
                  />
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Problema
                  </label>
                  <textarea
                    id="problem"
                    required
                    rows={4}
                    value={maintenanceForm.problem}
                    onChange={(e) => setMaintenanceForm({...maintenanceForm, problem: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva detalhadamente o problema do seu celular..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Solicitar Orçamento via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Clients Gallery */}
      <section id="clientes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ALGUNS DE NOSSOS CLIENTES
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Veja a satisfação de quem já confia na JV Celulares
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative">
                <img
                  src={clientImages[currentImageIndex]}
                  alt={`Cliente satisfeito ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg inline-block font-semibold shadow-lg">
                    Cliente Satisfeito ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {clientImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-green-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Estamos sempre prontos para atender você da melhor forma
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <div className="text-center">
              <button
                onClick={() => openWhatsApp('Olá! Gostaria de mais informações sobre os produtos.')}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-6 w-full transition-all duration-300 hover:scale-105 group"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 text-green-200 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-green-100">(13) 99646-2348</p>
              </button>
            </div>

            {/* Instagram */}
            <div className="text-center">
              <button
                onClick={() => window.open('https://instagram.com/jvcelulareseacessorios', '_blank')}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-6 w-full transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">IG</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-green-100">@jvcelulareseacessorios</p>
              </button>
            </div>

            {/* Location */}
            <div className="text-center">
              <button
                onClick={() => window.open('https://maps.google.com/?q=JV+Celulares+Guarujá', '_blank')}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl p-6 w-full transition-all duration-300 hover:scale-105 group"
              >
                <MapPin className="w-12 h-12 mx-auto mb-4 text-green-200 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2">Localização</h3>
                <p className="text-green-100">Guarujá - SP</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/c9a61cfa-70ed-4a5c-af52-6de8470d803b.jpg" 
                alt="JV Celulares e Acessórios" 
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <h3 className="font-bold">JV CELULARES E ACESSÓRIOS</h3>
                <p className="text-sm text-gray-400">A sua loja de confiança no Guarujá</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 JV Celulares e Acessórios. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Guarujá - SP | (13) 99646-2348
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => openWhatsApp('Olá! Gostaria de mais informações.')}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 animate-pulse"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  )
}