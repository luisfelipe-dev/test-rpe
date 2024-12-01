import React from 'react'
import { Helmet } from 'react-helmet-async'
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'
import { RiNextjsLine } from 'react-icons/ri'
import { SiJest, SiReactquery } from 'react-icons/si'
import { TbBrandVite } from 'react-icons/tb'

import CodeViewer from '@/components/CodeViewer'
import { ContainerGrid } from '@/components/container'
import { Separator } from '@/components/ui/separator'

const tailwindConfigCode = `
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#9333EA',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};
`

const WrapperIndex: React.FC = () => {
  return (
    <>
      <Helmet title="RPE - DESAFIO TÉCNICO" />
      <ContainerGrid className="bg-bg-main mt-16">
        <div className="mx-auto mb-6 flex w-full max-w-2xl flex-wrap items-start">
          <div className="mb-4 w-full">
            <img
              src="/images/header-image.png"
              alt="RPE - DESAFIO TÉCNICO"
              className="mb-6 h-auto max-w-full"
            />
          </div>

          <div className="w-full">
            <h2 className="mb-3 text-xl font-bold text-blue-600">
              1. Arquitetura de Front-end:
            </h2>

            <p className="mb-3 text-orange-600">Stack:</p>

            <ul>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <FaReact />
                  React:
                </strong>
                Por ser um framework eficiente para desenvolvimento de
                interfaces de usuário dinâmicas.
              </li>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <BiLogoTypescript />
                  TypeScript:
                </strong>
                Para maior segurança no código e manutenção.
              </li>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <TbBrandVite />
                  Vite:
                </strong>
                Para um ambiente de desenvolvimento rápido.
              </li>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <RiNextjsLine />
                  NextJS:
                </strong>
                Caso nosso produto precise de um SEO, NextJS é a escolha.
              </li>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <BiLogoTailwindCss />
                  Tailwind CSS:
                </strong>
                Para estilização consistente e flexível
              </li>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <SiReactquery />
                  React Query:
                </strong>
                Para gerenciar o estado assíncrono e caching.
              </li>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <SiJest />
                  Jest + Testing Library:
                </strong>
                Para garantir a qualidade do código.
              </li>
              <li className="mb-5 flex flex-col">
                <strong className="flex items-center gap-2 text-blue-500">
                  <GrDeploy />
                  CI/CD:
                </strong>
                Para deploy automatizado.
              </li>
            </ul>

            <Separator className="my-4" />

            <p className="mb-3 text-orange-600">Estrutura do Projeto:</p>

            <img
              src="/images/arquitetura.png"
              alt="Estrutura do Projeto"
              className="mb-6 h-auto max-w-full"
            />

            <Separator className="my-4" />

            <p className="mb-3 text-orange-600">Diagrama:</p>
            <p className="mb-3 text-orange-600">
              Fluxo de Arquitetura de Chamadas API e Estado:
            </p>

            <img
              src="/images/fluxo-api.png"
              alt="Fluxo de Arquitetura de Chamadas API e Estado"
              className="mb-6 h-auto max-w-full"
            />
          </div>

          <Separator className="my-4" />

          <div className="mb-6 mt-6 w-full">
            <h2 className="mb-3 text-xl font-bold text-blue-600">
              2. Escalabilidade e Desempenho:
            </h2>

            <p className="mb-3 text-orange-600">Etapas:</p>
            <p className="mb-3 text-orange-600">1 - Identificação:</p>

            <ul>
              <li>
                Monitorar com ferramentas como Lighthouse, New Relic, ou Sentry.
              </li>
              <li>
                Analisar logs e métricas de desempenho com Firebase ou AWS
                CloudWatch.
              </li>
            </ul>
            <p className="mb-3 mt-6 text-orange-600">2 - Resolução:</p>

            <ul>
              <li>
                Implementar lazy loading de componentes e splitting com React
                Suspense.
              </li>
              <li>
                Otimizar consultas usando React Query com estratégias de cache.
              </li>
              <li>Adotar memorização (React.memo e useMemo).</li>
            </ul>
            <p className="mb-3 mt-6 text-orange-600">3 - Monitoramento:</p>

            <ul>
              <li>
                Usar ferramentas como Chrome DevTools para profiling e
                otimização contínua
              </li>
            </ul>
          </div>

          <Separator className="my-4" />

          <div className="mb-6 mt-6 w-full">
            <h2 className="mb-3 text-xl font-bold text-blue-600">
              3. Manutenção e Evolução de Projetos:
            </h2>

            <p className="mb-3 text-orange-600">Plano de Ação:</p>

            <ol className="mb-3">
              <li>
                1. <strong>Auditoria do Código:</strong> Identificar as áreas
                críticas da dívida técnica.
              </li>
              <li>
                2. <strong>Refatoração Incremental:</strong> Priorizar
                refatorações sem alterar funcionalidades existentes.
              </li>
              <li>
                3. <strong>Cobertura de Testes:</strong> Garantir cobertura com
                Jest e Testing Library antes de refatorar.
              </li>
              <li>
                4. <strong>Documentação:</strong> Atualizar toda a documentação
                conforme os ajustes.
              </li>
            </ol>

            <Separator className="my-4" />

            <p className="mb-3 mt-3 text-orange-600">Diagrama:</p>
            <p className="mb-3 text-orange-600">
              Processo de Refatoração Incremental:
            </p>

            <img
              src="/images/fluxo-refatorar.png"
              alt="Processo de Refatoração Incremental"
              className="mb-6 h-auto max-w-full"
            />
          </div>

          <Separator className="my-4" />

          <div className="mb-6 mt-6 w-full">
            <h2 className="mb-3 text-xl font-bold text-blue-600">
              4. Integração com Back-end e APIs:
            </h2>

            <p className="mb-3 text-orange-600">Estrutura:</p>

            <ul className="mb-3">
              <li>
                <strong>Service Layer:</strong> Criar um módulo centralizado
                para gerenciar as requisições.
              </li>
              <li>
                <strong>Axios:</strong> Para simplificar chamadas API com
                interceptores para autenticação.
              </li>
              <li>
                <strong>Context API</strong> ou <strong>React Query:</strong>{' '}
                Para gerenciamento de estado global.
              </li>
              <li>
                <strong>Tratamento de Erros:</strong> Exibir feedbacks no UI com
                notificações (exemplo: react-toastify).
              </li>
            </ul>

            <p className="mb-3 text-orange-600">Autenticação e Autorização:</p>

            <ul className="mb-3">
              <li>Usar JWT para autenticação com refresh tokens.</li>
              <li>Implementar proteção de rotas com react-router-dom.</li>
            </ul>

            <Separator className="my-4" />

            <p className="mb-3 mt-3 text-orange-600">Diagrama:</p>
            <p className="mb-3 text-orange-600">
              Processo de Refatoração Incremental:
            </p>

            <img
              src="/images/fluxo-refatorar.png"
              alt="Processo de Refatoração Incremental"
              className="mb-6 h-auto max-w-full"
            />
          </div>

          <Separator className="my-4" />

          <div className="mb-6 mt-6 w-full">
            <h2 className="mb-3 text-xl font-bold text-blue-600">
              5. Design e UX
            </h2>

            <p className="mb-3 text-orange-600">
              Implementação do Design System:
            </p>

            <ul className="mb-3">
              <li>
                1. Criar uma biblioteca de componentes reutilizáveis com React e
                Storybook.
              </li>
              <li>
                2. Versionar com ferramentas como Lerna ou NX para múltiplos
                pacotes.
              </li>
              <li>3. Adotar Tailwind para garantir consistência visual.</li>
            </ul>

            <p className="mb-3 text-orange-600">Práticas:</p>

            <ul className="mb-3">
              <li>Criar documentação clara e exemplos no Storybook.</li>
              <li>Definir tokens de design centralizados para temas.</li>
            </ul>

            <Separator className="my-4" />

            <p className="mb-3 mt-3 text-orange-600">
              Exemplo de Token de Design (Tailwind Config):
            </p>

            <CodeViewer code={tailwindConfigCode} language="javascript" />

            <Separator className="my-4" />

            <p className="mb-3 mt-3 text-orange-600">Diagrama:</p>
            <p className="mb-3 mt-3 text-orange-600">
              Implementação de um Design System:
            </p>

            <img
              src="/images/fluxo-design.png"
              alt="Implementação de um Design System"
              className="mb-6 h-auto max-w-full"
            />
          </div>
        </div>
      </ContainerGrid>
    </>
  )
}

export default WrapperIndex
