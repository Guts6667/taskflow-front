function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          📝 TaskFlow
        </h1>
        <h2 className="text-3xl text-green-500 hover:text-red-500 transition-colors duration-300 cursor-pointer">
          TEST (passez la souris dessus)
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Si vous voyez ce texte avec les bonnes couleurs, Tailwind fonctionne ! ✅
        </p>
        
        {/* Test de différentes couleurs */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Test des couleurs Tailwind :</h3>
          <div className="space-y-2">
            <p className="text-red-500">🔴 Rouge (text-red-500)</p>
            <p className="text-blue-500">🔵 Bleu (text-blue-500)</p>
            <p className="text-green-500">🟢 Vert (text-green-500)</p>
            <p className="text-yellow-500">🟡 Jaune (text-yellow-500)</p>
            <p className="text-purple-500">🟣 Violet (text-purple-500)</p>
          </div>
        </div>
        
        {/* Test des utilitaires */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded border-l-4 border-blue-500">
            <p className="text-blue-700 font-medium">Bordure et background</p>
          </div>
          <div className="bg-green-100 p-4 rounded border-l-4 border-green-500">
            <p className="text-green-700 font-medium">Grid responsive</p>
          </div>
          <div className="bg-purple-100 p-4 rounded border-l-4 border-purple-500">
            <p className="text-purple-700 font-medium">Spacing et colors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;