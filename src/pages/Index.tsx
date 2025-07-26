import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-brand-brown">МебельПремиум</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-brand-brown transition-colors">Главная</a>
              <a href="#portfolio" className="text-gray-700 hover:text-brand-brown transition-colors">Портфолио</a>
              <a href="#services" className="text-gray-700 hover:text-brand-brown transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-brand-brown transition-colors">Преимущества</a>
              <a href="#reviews" className="text-gray-700 hover:text-brand-brown transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-brand-brown transition-colors">Контакты</a>
            </div>
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-charcoal mb-6 leading-tight">
                Кухни, шкафы и мебель 
                <span className="text-brand-gold">на заказ</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Изготавливаем кухонную мебель, шкафы-купе, мебель для ванных комнат и детских в Новосибирске. 
                Индивидуальные проекты под ваши размеры и потребности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-brand-brown hover:bg-brand-brown/90 text-white px-8 py-4">
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-8 py-4">
                  Смотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="/img/280dcdbb-6167-431b-8df8-0f380abedfdd.jpg" 
                alt="Премиальная мебель на заказ"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Каждое изделие — это воплощение мастерства и индивидуального подхода к каждому клиенту
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/280dcdbb-6167-431b-8df8-0f380abedfdd.jpg" 
                    alt="Кухня на заказ"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-brown">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Кухня премиум</h3>
                  <p className="text-gray-600">Угловая кухня с островом из массива дуба и мраморной столешницей</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/d9328296-7161-43ef-8a17-46975f9e9670.jpg" 
                    alt="Шкаф-купе на заказ"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-brown">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Шкаф-купе</h3>
                  <p className="text-gray-600">Встроенный шкаф с раздвижными дверями и LED-подсветкой</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="/img/7c89c037-1c5e-4250-a874-f90aa5b9c594.jpg" 
                    alt="Мебель для ванной"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-brown">
                      Подробнее
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Ванная комната</h3>
                  <p className="text-gray-600">Тумба под раковину с мраморной столешницей и зеркальным шкафом</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">Специализируемся на</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Создаем функциональную и красивую мебель для разных помещений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <Icon name="ChefHat" size={32} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Кухни</h3>
              <p className="text-gray-600 mb-4">Кухонные гарнитуры, острова, барные стойки</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Фасады из МДФ/массива</li>
                <li>• Встроенная техника</li>
                <li>• Столешницы из камня</li>
              </ul>
            </Card>

            <Card className="p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <Icon name="Home" size={32} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Шкафы</h3>
              <p className="text-gray-600 mb-4">Встроенные и корпусные шкафы-купе</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Раздвижные системы</li>
                <li>• Внутреннее наполнение</li>
                <li>• Зеркальные фасады</li>
              </ul>
            </Card>

            <Card className="p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <Icon name="Bath" size={32} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Ванные</h3>
              <p className="text-gray-600 mb-4">Мебель для ванных комнат и санузлов</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Влагостойкие материалы</li>
                <li>• Тумбы с раковинами</li>
                <li>• Зеркальные шкафчики</li>
              </ul>
            </Card>

            <Card className="p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-gold/20 transition-colors">
                <Icon name="Bed" size={32} className="text-brand-gold" />
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-2">Комнаты</h3>
              <p className="text-gray-600 mb-4">Детские, спальни, гостиные</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Кровати и комоды</li>
                <li>• Рабочие столы</li>
                <li>• Стенки и стеллажи</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Почему нас выбирают взыскательные клиенты в Новосибирске
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-brand-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={40} className="text-brand-brown" />
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-4">Опыт 15+ лет</h3>
              <p className="text-gray-600">Мастера с многолетним опытом создания премиальной мебели</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-brand-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={40} className="text-brand-brown" />
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-4">Гарантия 5 лет</h3>
              <p className="text-gray-600">Полная гарантия на все виды работ и материалы</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-brand-brown/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TreePine" size={40} className="text-brand-brown" />
              </div>
              <h3 className="text-xl font-semibold text-brand-charcoal mb-4">Премиум материалы</h3>
              <p className="text-gray-600">Только натуральные материалы высшего качества</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мнения тех, кто уже доверил нам создание своей мебели
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Icon name="User" size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-charcoal">Анна Петрова</h4>
                  <p className="text-gray-600 text-sm">Владелица частного дома</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Заказывали угловую кухню с островом. Качество превзошло все ожидания! 
                Использовали каждый сантиметр пространства максимально эффективно."
              </p>
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-current" />
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Icon name="User" size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-charcoal">Михаил Иванов</h4>
                  <p className="text-gray-600 text-sm">Руководитель компании</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Встроенный шкаф-купе в спальне превзошел ожидания. Вместительный, 
                удобный, с продуманным внутренним наполнением."
              </p>
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-current" />
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Icon name="User" size={24} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-charcoal">Елена Сидорова</h4>
                  <p className="text-gray-600 text-sm">Дизайнер интерьеров</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Мебель для детской комнаты получилась функциональной и безопасной. 
                Рекомендую всем родителям!"
              </p>
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-current" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-brand-gold mr-4" />
                  <div>
                    <p className="font-semibold">+7 (383) 555-0123</p>
                    <p className="text-gray-300">Звоните с 9:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-brand-gold mr-4" />
                  <div>
                    <p className="font-semibold">info@mebelpremium.ru</p>
                    <p className="text-gray-300">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-brand-gold mr-4" />
                  <div>
                    <p className="font-semibold">г. Новосибирск, ул. Красный проспект, 36</p>
                    <p className="text-gray-300">Шоу-рум и производство</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Получить консультацию</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                />
                <textarea 
                  placeholder="Опишите ваш проект"
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300"
                ></textarea>
                <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white py-3">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-charcoal border-t border-gray-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-brand-gold mb-4 md:mb-0">МебельПремиум</div>
            <p className="text-gray-400">© 2024 МебельПремиум. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;