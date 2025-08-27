export default function Home() {
  return (
    // Contenedor principal para centrar el formulario en la página.
    // Usamos <main> porque es el contenido principal de la página.
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      {/* Usamos <form> porque es un conjunto de controles que el usuario puede enviar. */}
      <form className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Appearance</h1>
          <p className="mt-1 text-sm text-gray-500">
            Set or customize your preferences for the system
          </p>
        </section>

        {/* Un <div> es necesario aquí para agrupar y aplicar espaciado entre las secciones */}
        <div className="space-y-8">
          {/* Campo de Idioma */}
          <div className="flex items-center justify-between">
            <div>
              <label
                htmlFor="language"
                className="block font-semibold text-gray-800"
              >
                Language
              </label>
              <p className="text-sm text-gray-500">
                Select the language of the platform
              </p>
            </div>
            <div className="relative">
              <select
                id="language"
                className="w-48 appearance-none rounded-lg border border-gray-300 bg-white px-4 py-2 pr-8 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              >
                <option>English</option>
                <option>Spanish</option>
              </select>
              {/* Icono de flecha para el select */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Campo de Tema de Interfaz */}
          <fieldset>
            <legend className="font-semibold text-gray-800">
              Interface theme
            </legend>
            <p className="mb-4 text-sm text-gray-500">
              Customize your application appearance
            </p>
            <div className="grid grid-cols-3 gap-4">
              {/* Opción Auto */}
              <div>
                <input
                  type="radio"
                  id="theme-auto"
                  name="theme"
                  value="auto"
                  className="peer sr-only"
                />
                <label
                  htmlFor="theme-auto"
                  className="block cursor-pointer rounded-lg border-2 border-gray-200 p-2 text-center peer-checked:border-indigo-600"
                >
                  <div className="rounded-md bg-gray-200 p-2">
                    <div className="h-16 w-full rounded bg-white shadow-sm">
                      <div className="h-4 w-full bg-gray-100"></div>
                      <div className="p-1">
                        <div className="mt-1 h-2 w-3/4 rounded-sm bg-gray-200"></div>
                        <div className="mt-1 h-2 w-1/2 rounded-sm bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                  <span className="mt-2 block text-sm font-medium text-gray-700">
                    Auto
                  </span>
                </label>
              </div>
              {/* Opción Light (Seleccionada por defecto) */}
              <div>
                <input
                  type="radio"
                  id="theme-light"
                  name="theme"
                  value="light"
                  className="peer sr-only"
                  defaultChecked
                />
                <label
                  htmlFor="theme-light"
                  className="relative block cursor-pointer rounded-lg border-2 border-gray-200 p-2 text-center peer-checked:border-indigo-600"
                >
                  <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white opacity-0 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="rounded-md bg-white p-2 ring-1 ring-gray-200">
                    <div className="h-16 w-full rounded bg-white shadow-sm ring-1 ring-gray-100">
                      <div className="h-4 w-full bg-gray-50"></div>
                      <div className="p-1">
                        <div className="mt-1 h-2 w-3/4 rounded-sm bg-gray-200"></div>
                        <div className="mt-1 h-2 w-1/2 rounded-sm bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                  <span className="mt-2 block text-sm font-medium text-gray-700">
                    Light
                  </span>
                </label>
              </div>
              {/* Opción Dark */}
              <div>
                <input
                  type="radio"
                  id="theme-dark"
                  name="theme"
                  value="dark"
                  className="peer sr-only"
                />
                <label
                  htmlFor="theme-dark"
                  className="block cursor-pointer rounded-lg border-2 border-gray-200 p-2 text-center peer-checked:border-indigo-600"
                >
                  <div className="rounded-md bg-slate-700 p-2">
                    <div className="h-16 w-full rounded bg-slate-800 shadow-sm">
                      <div className="h-4 w-full bg-slate-600"></div>
                      <div className="p-1">
                        <div className="mt-1 h-2 w-3/4 rounded-sm bg-slate-500"></div>
                        <div className="mt-1 h-2 w-1/2 rounded-sm bg-slate-500"></div>
                      </div>
                    </div>
                  </div>
                  <span className="mt-2 block text-sm font-medium text-gray-700">
                    Dark
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          {/* Campo de Color de Acento */}
          <fieldset className="flex items-center justify-between">
            <div>
              <legend className="font-semibold text-gray-800">
                Accent color
              </legend>
              <p className="text-sm text-gray-500">
                Pick your platform's main color
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="radio"
                id="color-red"
                name="accent-color"
                className="peer sr-only"
                defaultChecked
              />
              <label
                htmlFor="color-red"
                className="block h-6 w-6 cursor-pointer rounded-full bg-red-400 ring-offset-2 ring-offset-white peer-checked:ring-2 peer-checked:ring-red-400"
              ></label>

              <input
                type="radio"
                id="color-yellow"
                name="accent-color"
                className="peer sr-only"
              />
              <label
                htmlFor="color-yellow"
                className="block h-6 w-6 cursor-pointer rounded-full bg-yellow-400 ring-offset-2 ring-offset-white peer-checked:ring-2 peer-checked:ring-yellow-400"
              ></label>

              <input
                type="radio"
                id="color-green"
                name="accent-color"
                className="peer sr-only"
              />
              <label
                htmlFor="color-green"
                className="block h-6 w-6 cursor-pointer rounded-full bg-green-400 ring-offset-2 ring-offset-white peer-checked:ring-2 peer-checked:ring-green-400"
              ></label>

              <input
                type="radio"
                id="color-blue"
                name="accent-color"
                className="peer sr-only"
              />
              <label
                htmlFor="color-blue"
                className="block h-6 w-6 cursor-pointer rounded-full bg-indigo-500 ring-offset-2 ring-offset-white peer-checked:ring-2 peer-checked:ring-indigo-500"
              ></label>

              <input
                type="radio"
                id="color-pink"
                name="accent-color"
                className="peer sr-only"
              />
              <label
                htmlFor="color-pink"
                className="block h-6 w-6 cursor-pointer rounded-full bg-pink-400 ring-offset-2 ring-offset-white peer-checked:ring-2 peer-checked:ring-pink-400"
              ></label>
            </div>
          </fieldset>

          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="M5 3v18" />
                  <path d="M12 3v18" />
                  <path d="M19 3v18" />
                </svg>
                <label
                  htmlFor="reduce-motion"
                  className="font-semibold text-gray-800"
                >
                  Reduce motion
                </label>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  id="reduce-motion"
                  className="peer sr-only"
                  defaultChecked
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </label>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <label
                  htmlFor="auto-play"
                  className="font-semibold text-gray-800"
                >
                  Auto play
                </label>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  id="auto-play"
                  className="peer sr-only"
                  defaultChecked
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </label>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <label
                  htmlFor="high-quality"
                  className="font-semibold text-gray-800"
                >
                  High quality photo
                </label>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  id="high-quality"
                  className="peer sr-only"
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
              </label>
            </li>
          </ul>
        </div>

        <footer className="mt-10 flex items-center justify-end gap-x-4 border-t border-gray-200 pt-6">
          <button
            type="button"
            className="mr-auto text-sm font-semibold text-gray-600 hover:text-gray-800"
          >
            Reset to default
          </button>
          <button
            type="button"
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Save Preferences
          </button>
        </footer>
      </form>
    </main>
  );
}
