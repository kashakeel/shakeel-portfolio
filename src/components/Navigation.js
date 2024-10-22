export const Navigation = () => (
  <nav className="flex justify-between items-center mb-16">
    <div className="text-xl font-bold">Shakeel.</div>
    <div className="space-x-6">
      {['Home', 'About', 'Experience', 'Skills', 'Contact'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400">
          {item}
        </a>
      ))}
    </div>
  </nav>
);