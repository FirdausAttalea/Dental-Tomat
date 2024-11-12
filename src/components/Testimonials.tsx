import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nadia Auba",
      text: "The best dental experience I've ever had. Dr. Johnson and her team are incredibly professional and caring.",
      rating: 5
    },
    {
      name: "Galang Franfis",
      text: "Finally found a dental office that makes me feel comfortable. The staff is friendly and the facilities are top-notch.",
      rating: 5
    },
    {
      name: "Fania Alfadin Uba",
      text: "My children love coming here! Dr. Rodriguez has a special way with kids that makes dental visits fun.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our patients say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}