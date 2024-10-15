import { useForm } from "@tanstack/react-form"

export const AuthForm = () => {

  const form = useForm({
    defaultValues: {
      username: '',
      password: ''
    },
    onSubmit: ({ value }) => {
      return;
    }
  });

  function handleSubmitForm(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmitForm} >
        <div className="mb-2">
          <form.Field name="username" children={(field) => (
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Usuario POS"
              required
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )} />
        </div>
        <div className="mb-2">
          <form.Field name="password" children={(field) => (
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Contraseña"
              required
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
          )} />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onSubmit={form.handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Inicia Sesión</button>
        </div>
      </form>
    </div>
  )
}
