import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Edit3, Trash2, Download, XCircle, Lock, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

// ─── Tailwind color tokens used (must exist in your config) ──────────────────
// bg-primary        → navy (e.g. #0f2744)
// bg-navy-light     → lighter navy panel
// text-accent       → gold (e.g. #c9913a)
// border-navy-light → subtle navy border
// If your tailwind.config uses different names, adjust accordingly.
// ─────────────────────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'responsavel',   num: '01', title: 'Responsável pelo Tratamento' },
  { id: 'dados',         num: '02', title: 'Dados Recolhidos' },
  { id: 'finalidades',   num: '03', title: 'Finalidades e Base Legal' },
  { id: 'partilha',      num: '04', title: 'Partilha de Dados com Terceiros' },
  { id: 'direitos',      num: '05', title: 'Os Seus Direitos' },
  { id: 'cookies',       num: '06', title: 'Cookies' },
  { id: 'retencao',      num: '07', title: 'Retenção de Dados' },
  { id: 'seguranca',     num: '08', title: 'Segurança dos Dados' },
  { id: 'contacto',      num: '09', title: 'Contacto e Reclamações' },
];

const RIGHTS = [
  { icon: Eye,       title: 'Acesso',       desc: 'Obter cópia dos seus dados pessoais que tratamos' },
  { icon: Edit3,     title: 'Retificação',  desc: 'Corrigir dados incompletos ou inexatos' },
  { icon: Trash2,    title: 'Apagamento',   desc: 'Solicitar a eliminação dos seus dados ("direito ao esquecimento")' },
  { icon: Download,  title: 'Portabilidade',desc: 'Receber os seus dados num formato estruturado e legível por máquina' },
  { icon: XCircle,   title: 'Oposição',     desc: 'Opor-se ao tratamento baseado em interesse legítimo' },
  { icon: Lock,      title: 'Limitação',    desc: 'Restringir o tratamento em determinadas circunstâncias' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ num, title }) {
  return (
    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-200">
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
        <span className="text-accent text-xs font-bold">{num}</span>
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
  );
}

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-4 rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-primary">
            {headers.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 text-accent text-xs font-semibold uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-600 align-top leading-relaxed">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-block ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-accent tracking-wide">
      {children}
    </span>
  );
}

function AccordionSection({ num, id, title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <section id={id} className="mb-8 scroll-mt-24">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 mb-0 pb-4 border-b border-gray-200 text-left group"
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-accent text-xs font-bold">{num}</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 flex-1">{title}</h2>
        {open
          ? <ChevronUp size={18} className="text-gray-400 group-hover:text-accent transition-colors" />
          : <ChevronDown size={18} className="text-gray-400 group-hover:text-accent transition-colors" />
        }
      </button>
      {open && <div className="pt-5">{children}</div>}
    </section>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <div className="bg-primary text-white relative overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute top-0 right-0 w-72 h-72 border border-yellow-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute top-8 right-8 w-48 h-48 border border-yellow-400/5 rounded-full pointer-events-none" />

        <div className="container-custom py-16 relative z-10">
          {/* Brand */}
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-primary text-base">
              DM
            </div>
            <div className="leading-tight">
              <p className="font-bold text-base tracking-tight">YACHT CARE</p>
              <p className="text-[9px] text-accent font-semibold tracking-widest uppercase">
                Especialistas Marítimos
              </p>
            </div>
          </Link>

          <div className="flex items-start gap-4 mb-4">
            <Shield size={36} className="text-accent flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">
                Política de Privacidade
              </h1>
              <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
                Explicamos como recolhemos, utilizamos e protegemos os seus dados pessoais,
                em plena conformidade com o RGPD e a legislação portuguesa aplicável.
              </p>
            </div>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-white/10">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Entrada em vigor</p>
              <p className="text-accent font-semibold text-sm">1 de Janeiro de 2026</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Última atualização</p>
              <p className="text-accent font-semibold text-sm">1 de Maio de 2026</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Versão</p>
              <p className="text-accent font-semibold text-sm">2.0</p>
            </div>
          </div>
        </div>

        {/* Gold bottom line */}
        <div className="h-0.5 bg-gradient-to-r from-accent via-yellow-300 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">

          {/* Table of Contents */}
          <nav className="bg-white border-l-4 border-accent rounded-r-xl px-6 py-5 mb-12 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Índice
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-accent hover:underline"
                >
                  {s.num}. {s.title}
                </a>
              ))}
            </div>
          </nav>

          {/* ── Section 1 ── */}
          <AccordionSection id="responsavel" num="01" title="Responsável pelo Tratamento">
            <p className="text-gray-600 leading-relaxed mb-3">
              O responsável pelo tratamento dos seus dados pessoais é a{' '}
              <strong className="text-gray-800">DM Yacht Care</strong>, com sede nos
              Estaleiros da Marina de Portimão, Loja 5, Parchal, 8400-279 Ferragudo,
              Portugal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Para qualquer questão relacionada com a proteção de dados, pode contactar-nos
              através do endereço{' '}
              <a href="mailto:info@dmyachtcare.com" className="text-accent hover:underline font-medium">
                info@dmyachtcare.com
              </a>{' '}
              ou pelos números (+351) 915 730 843 (Denys Moraes) e (+351) 913 282 888
              (Carla Pereira).
            </p>
          </AccordionSection>

          {/* ── Section 2 ── */}
          <AccordionSection id="dados" num="02" title="Dados Recolhidos">
            <p className="text-gray-600 leading-relaxed mb-4">
              Recolhemos apenas os dados estritamente necessários para a prestação dos
              nossos serviços:
            </p>
            <DataTable
              headers={['Categoria', 'Dados recolhidos', 'Quando']}
              rows={[
                ['Identificação', 'Nome completo, NIF (opcional), empresa', 'Registo / encomenda'],
                ['Contacto', 'E-mail, telefone, morada de envio e faturação', 'Registo / checkout'],
                ['Pagamento', 'Dados de cartão (processados pela Stripe/PayPal — não armazenamos)', 'Checkout'],
                ['Navegação', 'Endereço IP, cookies, páginas visitadas, dispositivo', 'Visita ao site'],
                ['Comunicação', 'Conteúdo de mensagens enviadas via formulário ou e-mail', 'Contacto'],
              ]}
            />
          </AccordionSection>

          {/* ── Section 3 ── */}
          <AccordionSection id="finalidades" num="03" title="Finalidades e Base Legal">
            <DataTable
              headers={['Finalidade', 'Base legal (RGPD)']}
              rows={[
                ['Processamento e entrega de encomendas', 'Execução de contrato — Art. 6.º(1)(b)'],
                ['Emissão de faturas e obrigações fiscais', 'Obrigação legal — Art. 6.º(1)(c)'],
                [<span>Envio de newsletter e promoções <Badge>Opt-in</Badge></span>, 'Consentimento — Art. 6.º(1)(a)'],
                ['Apoio ao cliente e gestão de devoluções', 'Execução de contrato — Art. 6.º(1)(b)'],
                ['Prevenção de fraude e segurança', 'Interesse legítimo — Art. 6.º(1)(f)'],
                ['Análise de desempenho do site', 'Interesse legítimo / Consentimento — Art. 6.º(1)(f)/(a)'],
              ]}
            />
          </AccordionSection>

          {/* ── Section 4 ── */}
          <AccordionSection id="partilha" num="04" title="Partilha de Dados com Terceiros">
            {[
              { title: 'Processadores de pagamento', text: 'Stripe e PayPal, para processamento seguro de transações. Estes processadores são certificados PCI-DSS e nunca nos transmitem os dados completos do cartão.' },
              { title: 'Transportadoras', text: 'CTT, DHL e parceiros de logística, para entrega das encomendas — recebem apenas nome, morada e contacto de entrega.' },
              { title: 'Infraestrutura tecnológica', text: 'Vercel (alojamento), Supabase (base de dados) e GitHub (código-fonte), todos com servidores no Espaço Económico Europeu ou com garantias adequadas ao abrigo do RGPD.' },
              { title: 'Autoridades competentes', text: 'Quando legalmente obrigados (AT — Autoridade Tributária, autoridades policiais), mediante solicitação formal.' },
            ].map(({ title, text }) => (
              <div key={title} className="mb-4 pl-4 border-l-2 border-gray-200">
                <p className="font-semibold text-gray-800 mb-1">{title}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </AccordionSection>

          {/* ── Section 5 ── */}
          <AccordionSection id="direitos" num="05" title="Os Seus Direitos">
            <p className="text-gray-600 leading-relaxed mb-5">
              Ao abrigo do RGPD, dispõe dos seguintes direitos, que pode exercer a qualquer
              momento através de{' '}
              <a href="mailto:info@dmyachtcare.com" className="text-accent hover:underline font-medium">
                info@dmyachtcare.com
              </a>
              . Responderemos no prazo de <strong className="text-gray-800">30 dias</strong>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RIGHTS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-accent flex-shrink-0" />
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      {title}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* ── Section 6 ── */}
          <AccordionSection id="cookies" num="06" title="Cookies">
            <p className="text-gray-600 leading-relaxed mb-4">
              O nosso site utiliza cookies para garantir o funcionamento correto, analisar o
              tráfego e personalizar a experiência. Ao aceder ao site pela primeira vez,
              ser-lhe-á apresentado um banner de consentimento.
            </p>
            <DataTable
              headers={['Tipo', 'Exemplos', 'Duração', 'Consentimento']}
              rows={[
                ['Essenciais', 'Sessão, carrinho, autenticação', 'Sessão / 30 dias', 'Não necessário'],
                ['Analíticos', 'Google Analytics, Vercel Analytics', '13 meses', 'Necessário'],
                ['Marketing', 'Meta Pixel, Google Ads', '90 dias', 'Necessário'],
              ]}
            />
            <p className="text-gray-600 leading-relaxed text-sm">
              Pode gerir as suas preferências de cookies a qualquer momento nas definições
              do seu browser ou através do nosso painel de preferências.
            </p>
          </AccordionSection>

          {/* ── Section 7 ── */}
          <AccordionSection id="retencao" num="07" title="Retenção de Dados">
            {[
              { title: 'Encomendas e faturação', text: '10 anos, conforme exigido pelo Código Comercial e legislação fiscal portuguesa (CIVA).' },
              { title: 'Conta de cliente', text: 'Enquanto a conta estiver ativa. Após eliminação da conta, os dados são apagados no prazo de 90 dias, salvo obrigação legal de conservação.' },
              { title: 'Newsletter', text: 'Até à revogação do consentimento.' },
              { title: 'Dados de navegação (logs, cookies analíticos)', text: 'Máximo de 13 meses.' },
            ].map(({ title, text }) => (
              <div key={title} className="mb-4 pl-4 border-l-2 border-gray-200">
                <p className="font-semibold text-gray-800 mb-1">{title}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </AccordionSection>

          {/* ── Section 8 ── */}
          <AccordionSection id="seguranca" num="08" title="Segurança dos Dados">
            {[
              { title: 'Transmissão segura', text: 'Todo o tráfego do site é encriptado via HTTPS/TLS 1.3. Os dados de pagamento são processados em ambientes PCI-DSS certificados.' },
              { title: 'Controlo de acesso', text: 'O acesso à base de dados (Supabase) é restrito por Row Level Security (RLS) e autenticação multifator para administradores.' },
              { title: 'Alojamento seguro', text: 'A infraestrutura Vercel e Supabase opera em datacenters europeus certificados ISO 27001.' },
            ].map(({ title, text }) => (
              <div key={title} className="mb-4 pl-4 border-l-2 border-gray-200">
                <p className="font-semibold text-gray-800 mb-1">{title}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
              </div>
            ))}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Violação de dados:</strong> Em caso de violação que coloque em
                risco os seus direitos, notificaremos a{' '}
                <strong>CNPD</strong> no prazo de 72 horas e os titulares afetados sem
                demora injustificada.
              </p>
            </div>
          </AccordionSection>

          {/* ── Section 9 ── */}
          <AccordionSection id="contacto" num="09" title="Contacto e Reclamações">
            <p className="text-gray-600 leading-relaxed mb-5">
              Para questões relativas à proteção dos seus dados ou para exercer os seus
              direitos, contacte-nos através de:
            </p>
            <div className="bg-primary rounded-xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
              {[
                { icon: Mail,   label: 'E-mail',    value: 'info@dmyachtcare.com' },
                { icon: Phone,  label: 'Telefone',  value: '(+351) 915 730 843' },
                { icon: MapPin, label: 'Morada',    value: 'Marina de Portimão, Loja 5\n8400-279 Ferragudo' },
                { icon: Shield, label: 'Autoridade de supervisão', value: 'CNPD — www.cnpd.pt' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-accent font-semibold text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              Tem também o direito de apresentar reclamação à{' '}
              <strong className="text-gray-800">CNPD</strong> (Comissão Nacional de
              Proteção de Dados), a autoridade de controlo competente em Portugal, se
              considerar que o tratamento dos seus dados viola o RGPD.
            </p>
          </AccordionSection>

          {/* Footer note */}
          <div className="text-center pt-8 border-t border-gray-200 mt-4">
            <p className="text-xs text-gray-400">
              © 2026 DM Yacht Care · Todos os direitos reservados
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Esta política pode ser atualizada periodicamente. Em caso de alterações
              significativas, será notificado por e-mail.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
