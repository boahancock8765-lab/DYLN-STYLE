# DYLN-STYLE
Rekomendasi style harian
import React, { useState, useEffect } from 'react';
import { User, Ruler, Weight, ShoppingBag, CheckCircle, ArrowRight, Star, Filter, ExternalLink } from 'lucide-react';

const App = () => {
  const [step, setStep] = useState('input'); // 'input' or 'catalog'
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    shoeSize: ''
  });
  const [recommendation, setRecommendation] = useState({
    clothingSize: '',
    shoeSize: ''
  });

  // Data Produk dengan Link Toko Online (Contoh)
  const products = [
    { 
      id: 1, 
      name: "Kaos Oversize Minimalist", 
      category: "Atasan", 
      price: "Rp 149.000", 
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500", 
      rating: 4.8,
      link: "https://shopee.co.id" // Ganti dengan link produk asli nantinya
    },
    { 
      id: 2, 
      name: "Kemeja Flanel Premium", 
      category: "Atasan", 
      price: "Rp 299.000", 
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=500", 
      rating: 4.5,
      link: "https://tokopedia.com"
    },
    { 
      id: 3, 
      name: "Celana Chino Slim Fit", 
      category: "Bawahan", 
      price: "Rp 349.000", 
      image: "https://images.unsplash.com/photo-1624371414361-e6e9ef0e402c?auto=format&fit=crop&q=80&w=500", 
      rating: 4.7,
      link: "https://shopee.co.id"
    },
    { 
      id: 4, 
      name: "Denim Jacket Vintage", 
      category: "Atasan", 
      price: "Rp 499.000", 
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=500", 
      rating: 4.9,
      link: "https://tokopedia.com"
    },
    { 
      id: 5, 
      name: "Sneakers Urban Walk", 
      category: "Sepatu", 
      price: "Rp 599.000", 
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=500", 
      rating: 4.6,
      link: "https://shopee.co.id"
    },
    { 
      id: 6, 
      name: "Loafers Classic Brown", 
      category: "Sepatu", 
      price: "Rp 749.000", 
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=500", 
      rating: 4.4,
      link: "https://tokopedia.com"
    },
    { 
      id: 7, 
      name: "Cargo Pants Olive", 
      category: "Bawahan", 
      price: "Rp 389.000", 
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500", 
      rating: 4.7,
      link: "https://shopee.co.id"
    },
    { 
      id: 8, 
      name: "Hoodie Comfort Grey", 
      category: "Atasan", 
      price: "Rp 329.000", 
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=500", 
      rating: 4.8,
      link: "https://tokopedia.com"
    },
  ];

  const calculateRecommendation = (e) => {
    e.preventDefault();
    const h = parseFloat(formData.height);
    const w = parseFloat(formData.weight);
    
    let size = "M";
    if (h > 180 || w > 85) size = "XL";
    else if (h > 170 || w > 70) size = "L";
    else if (h < 160 || w < 50) size = "S";

    setRecommendation({
      clothingSize: size,
      shoeSize: formData.shoeSize
    });
    setStep('catalog');
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setStep('input')}>
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <ShoppingBag size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-indigo-900">FitStyle.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Terbaru</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Populer</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {step === 'input' ? (
          <>
            <section className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-indigo-950">
                Temukan Outfit yang <span className="text-indigo-600">Pas</span> untuk Anda
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Masukkan ukuran tubuh Anda dan kami akan mencarikan produk yang tepat di toko online favorit.
              </p>
            </section>
            
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                  <User className="text-indigo-600" size={24} />
                  Profil Ukuran
                </h2>
                <form onSubmit={calculateRecommendation} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Tinggi Badan (cm)</label>
                    <div className="relative">
                      <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="number"
                        name="height"
                        required
                        placeholder="Contoh: 175"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        value={formData.height}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Berat Badan (kg)</label>
                    <div className="relative">
                      <Weight className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="number"
                        name="weight"
                        required
                        placeholder="Contoh: 65"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        value={formData.weight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ukuran Kaki (EU)</label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xs">EU</div>
                      <input
                        type="number"
                        name="shoeSize"
                        required
                        placeholder="Contoh: 42"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        value={formData.shoeSize}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 group"
                  >
                    Mulai Belanja
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-10 animate-in fade-in duration-700">
            {/* Hasil Rekomendasi */}
            <div className="bg-indigo-900 p-8 rounded-3xl shadow-2xl text-white flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-indigo-300 mb-2">
                  <CheckCircle size={20} />
                  <span className="font-bold tracking-wide uppercase text-sm">Rekomendasi Berhasil</span>
                </div>
                <h2 className="text-3xl font-extrabold">
                  Ukuran Anda: <span className="text-indigo-400">{recommendation.clothingSize}</span> & <span className="text-indigo-400">{recommendation.shoeSize}</span>
                </h2>
                <p className="mt-2 text-indigo-100 opacity-80">Klik pada produk untuk membelinya langsung di toko online.</p>
              </div>
              <button 
                onClick={() => setStep('input')}
                className="relative z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold px-6 py-3 rounded-xl border border-white/20 transition-all text-sm"
              >
                Atur Ulang Ukuran
              </button>
              {/* Dekorasi Background */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <a 
                  key={product.id} 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full shadow-lg text-xs font-bold flex items-center gap-1">
                      {product.category === "Sepatu" ? `Size ${recommendation.shoeSize}` : `Size ${recommendation.clothingSize}`}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Beli Sekarang <ExternalLink size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold text-gray-600">{product.rating}</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">{product.category}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-extrabold text-indigo-900">{product.price}</span>
                      <div className="text-indigo-500 group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20 py-12 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <ShoppingBag size={16} />
            </div>
            <span className="font-bold text-lg text-indigo-900">FitStyle.</span>
          </div>
          <p className="text-gray-400 text-sm">
            Klik barang untuk menuju toko online mitra kami (Shopee/Tokopedia).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
