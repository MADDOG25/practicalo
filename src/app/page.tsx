import { Button, Label, Input } from "@/components/ui/index";

export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="../public/1.png"
            alt="Your Company"
          /> */}
          <h1 className="mt-10 text-center text-6xl font-bold leading-9 tracking-tight text-indigo-600">
            PractícaLo
          </h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicia sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="email">Correo</Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="correo@gmail.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Olvidaste la contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="******"
                />
              </div>
            </div>

            <div>
              <Button type="submit">Inicia sesión</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No tienes cuenta?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Registrate
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
