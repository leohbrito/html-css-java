import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Section } from '@/components/ui'
import { ContactForm } from '@/components/ContactForm'

export const metadata = { title: 'Contato' }

export default function ContatoPage() {
  return (
    <div>
      <Header />
      <main>
        <Section>
          <h1 className="text-3xl font-semibold text-neutral-900 mb-6">Contato</h1>
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
