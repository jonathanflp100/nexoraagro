import { type FormEvent, useRef, useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_SERVICES, PARAGUAY_DEPARTMENTS } from '../data/siteContent';
import { buildWhatsAppUrl, COMPANY_INFO } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FormState {
  nombre: string;
  ciudad: string;
  departamento: string;
  servicio: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  ciudad?: string;
  mensaje?: string;
}

const INITIAL_STATE: FormState = {
  nombre: '',
  ciudad: '',
  departamento: PARAGUAY_DEPARTMENTS[0],
  servicio: CONTACT_SERVICES[0],
  mensaje: '',
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<string>('');
  const launchAnchorRef = useRef<HTMLAnchorElement | null>(null);

  const composeWhatsAppText = (data: FormState) => {
    const ubicacion = `${data.ciudad.trim()} (${data.departamento})`;
    const lineas = [
      'Hola Nexora, me comunico desde su sitio web.',
      `Nombre: ${data.nombre.trim()}`,
      `Ciudad / Departamento: ${ubicacion}`,
      `Servicio de interés: ${data.servicio}`,
    ];
    if (data.mensaje.trim()) {
      lineas.push(`Consulta: ${data.mensaje.trim()}`);
    }
    return lineas.join('\n');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (form.nombre.trim().length < 2) {
      nextErrors.nombre = 'Por favor, indique su nombre y apellido.';
    }
    if (form.ciudad.trim().length < 2) {
      nextErrors.ciudad = 'Por favor, indique su ciudad o distrito.';
    }
    if (form.mensaje.trim().length < 6) {
      nextErrors.mensaje =
        'Cuéntenos brevemente qué necesita (por ejemplo, cantidad de tanques o etapa de su proyecto).';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const text = composeWhatsAppText(form);
    const url = buildWhatsAppUrl(text);
    setSubmittedMessage(text);
    setSubmittedUrl(url);

    // Abre WhatsApp mediante enlace nativo en nueva pestaña sin usar window.open
    requestAnimationFrame(() => {
      launchAnchorRef.current?.click();
    });
  };

  const resetForm = () => {
    setSubmittedUrl(null);
    setSubmittedMessage('');
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-20 bg-white py-20 text-[#0D0D0D] sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Columna de contexto y datos directos */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#0D9488]">
              Contacto directo
            </p>
            <h2 className="mt-2 font-display text-balance text-3xl font-black tracking-tight text-[#0D0D0D] sm:text-4xl">
              Cuéntenos sobre su terreno o proyecto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Complete estos datos breves y armamos automáticamente su mensaje de
              WhatsApp para que nuestro equipo técnico le responda con
              información precisa para su zona.
            </p>

            <dl className="mt-8 space-y-5 border-t border-neutral-200 pt-7 text-sm">
              <div className="flex items-start gap-3.5">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#0D9488]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-[#0D0D0D]">WhatsApp</dt>
                  <dd className="mt-0.5 text-neutral-600 tabular-nums">
                    {COMPANY_INFO.whatsappDisplay}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#0D9488]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-[#0D0D0D]">Correo electrónico</dt>
                  <dd className="mt-0.5 text-neutral-600">
                    {COMPANY_INFO.email}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#0D9488]"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-semibold text-[#0D0D0D]">Cobertura</dt>
                  <dd className="mt-0.5 text-neutral-600">
                    {COMPANY_INFO.location}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Formulario hacia WhatsApp */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-8">
              <a
                ref={launchAnchorRef}
                href={submittedUrl ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-only"
                tabIndex={-1}
                aria-hidden="true"
              >
                Abrir WhatsApp
              </a>

              {submittedUrl ? (
                <div className="space-y-5 py-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#0D9488]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-2xl font-extrabold text-[#0D0D0D]">
                        Su mensaje para WhatsApp está listo
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600">
                        Si la ventana de WhatsApp no se abrió automáticamente, haga
                        clic en el botón de abajo para enviar su consulta.
                      </p>
                    </div>
                  </div>

                  <pre className="whitespace-pre-wrap rounded-xl border border-neutral-200 bg-white p-4 font-sans text-sm leading-relaxed text-neutral-700">
                    {submittedMessage}
                  </pre>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-6 py-3 text-sm font-extrabold text-[#0D0D0D] transition-colors hover:bg-[#E5A500] whitespace-nowrap shrink-0"
                    >
                      <WhatsAppIcon className="h-4 w-4 shrink-0" />
                      <span>Abrir conversación en WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-[#0D0D0D] hover:text-[#0D0D0D] whitespace-nowrap shrink-0"
                    >
                      Editar consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-nombre"
                      className="block text-sm font-semibold text-[#0D0D0D]"
                    >
                      Nombre y apellido
                    </label>
                    <input
                      id="contact-nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.nombre}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, nombre: e.target.value }));
                        if (errors.nombre) {
                          setErrors((prev) => ({ ...prev, nombre: undefined }));
                        }
                      }}
                      placeholder="Ej.: Carlos Benítez"
                      className={`mt-1.5 block min-h-[46px] w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-neutral-400 transition-colors focus:border-[#0D0D0D] focus:outline-none ${
                        errors.nombre ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.nombre && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-ciudad"
                        className="block text-sm font-semibold text-[#0D0D0D]"
                      >
                        Ciudad o distrito
                      </label>
                      <input
                        id="contact-ciudad"
                        name="ciudad"
                        type="text"
                        required
                        value={form.ciudad}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, ciudad: e.target.value }));
                          if (errors.ciudad) {
                            setErrors((prev) => ({ ...prev, ciudad: undefined }));
                          }
                        }}
                        placeholder="Ej.: Encarnación, Caacupé, Coronel Oviedo..."
                        className={`mt-1.5 block min-h-[46px] w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-neutral-400 transition-colors focus:border-[#0D0D0D] focus:outline-none ${
                          errors.ciudad ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                      {errors.ciudad && (
                        <p className="mt-1.5 text-xs font-medium text-red-600">
                          {errors.ciudad}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-departamento"
                        className="block text-sm font-semibold text-[#0D0D0D]"
                      >
                        Departamento
                      </label>
                      <select
                        id="contact-departamento"
                        name="departamento"
                        value={form.departamento}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            departamento: e.target.value,
                          }))
                        }
                        className="mt-1.5 block min-h-[46px] w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-[#0D0D0D] transition-colors focus:border-[#0D0D0D] focus:outline-none"
                      >
                        {PARAGUAY_DEPARTMENTS.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-servicio"
                      className="block text-sm font-semibold text-[#0D0D0D]"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="contact-servicio"
                      name="servicio"
                      value={form.servicio}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, servicio: e.target.value }))
                      }
                      className="mt-1.5 block min-h-[46px] w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-[#0D0D0D] transition-colors focus:border-[#0D0D0D] focus:outline-none"
                    >
                      {CONTACT_SERVICES.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-mensaje"
                      className="block text-sm font-semibold text-[#0D0D0D]"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="contact-mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      value={form.mensaje}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, mensaje: e.target.value }));
                        if (errors.mensaje) {
                          setErrors((prev) => ({ ...prev, mensaje: undefined }));
                        }
                      }}
                      placeholder="Cuéntenos si ya cuenta con pozo o arroyo, cuántos tanques proyecta o en qué etapa se encuentra..."
                      className={`mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0D0D0D] placeholder:text-neutral-400 transition-colors focus:border-[#0D0D0D] focus:outline-none ${
                        errors.mensaje ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.mensaje && (
                      <p className="mt-1.5 text-xs font-medium text-red-600">
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#FFB800] px-6 py-3.5 text-base font-extrabold text-[#0D0D0D] shadow-sm transition-all duration-150 hover:bg-[#E5A500] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0D0D]"
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0" />
                    <span>Enviar consulta por WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
