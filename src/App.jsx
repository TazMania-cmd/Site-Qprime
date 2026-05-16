import { useState } from 'react'
import { motion } from 'framer-motion'
import { Printer, Settings, Box, PenTool, ShieldCheck, Zap } from 'lucide-react'
import ThreeCanvas from './ThreeCanvas'
import './App.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

function App() {
  const [pages, setPages] = useState(10000);
  const economyPerYear = (pages * 0.07) * 12;

  return (
    <>
      <div className="bg-blobs">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar glass"
      >
        <div className="logo">QPRIME<span>.</span></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#quemsomos">Quem Somos</a>
          <a href="#solucoes">Soluções</a>
          <a href="#cases">Cases</a>
          <a href="#contato" className="btn-secondary">Contato</a>
          <a href="https://www.octecnologia.com.br/sistema2/primecartuchos/loginCliente" target="_blank" rel="noreferrer" className="btn-primary">Área do Cliente</a>
        </div>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          {/* Printer Aesthetics */}
          <div className="reg-mark top-left"><div className="reg-mark-center"></div></div>
          <div className="reg-mark top-right"><div className="reg-mark-center"></div></div>
          <div className="reg-mark bottom-left"><div className="reg-mark-center"></div></div>
          <div className="reg-mark bottom-right"><div className="reg-mark-center"></div></div>

          <div className="cmyk-bar">
            <div className="c-cyan"></div>
            <div className="c-magenta"></div>
            <div className="c-yellow"></div>
            <div className="c-black"></div>
          </div>

          <div className="hero-container">
            <motion.div
              className="hero-content glass"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 variants={fadeInUp}>
                IMPRESSÃO INTELIGENTE,<br />
                <span className="text-gradient">RESULTADO VISÍVEL</span>
              </motion.h1>
              <motion.p variants={fadeInUp}>
                Muito além de equipamentos. A QPRIME entrega performance, economia e tranquilidade operacional com soluções completas em outsourcing de impressão, manutenção e suprimentos personalizados para o seu negócio.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeInUp}>
                <a href="https://wa.me/5562982480001" target="_blank" rel="noreferrer">
                  <button className="btn-primary large">FALAR COM UM ESPECIALISTA</button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-3d"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <ThreeCanvas />
            </motion.div>
          </div>
        </section>

        {/* Quem Somos Section */}
        <section id="quemsomos" className="split-section">
          <motion.div
            className="split-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>MAIS DE 20 ANOS DE CONFIANÇA E RESULTADOS NO PAPEL</motion.h2>
            <motion.p variants={fadeInUp}>
              Com mais de 22 anos de experiência no ramo de Outsourcing, suprimentos de impressão, venda de impressoras e serviços de manutenção, nossa empresa se destaca no mercado combinando tecnologia, agilidade e suporte técnico de alto padrão.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Nossa tecnologia de outsourcing e gestão documental coloca sua empresa no controle total dos processos de impressão. Ganhe eficiência, previsibilidade e redução de desperdício.
            </motion.p>
            <div className="glass-box" style={{ marginTop: '30px' }}>
              <h3>Tecnologia de Ponta</h3>
              <p style={{ color: "var(--color-text-muted)" }}>Equipamentos operando com manutenção proativa e redução de desperdício.</p>
            </div>
          </motion.div>

          <motion.div
            className="split-image-decorative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Espaço para imagem ou gráfico secundário se necessário */}
            <div className="registration-graphic">
              <div className="circle-main"></div>
              <div className="circle-inner"></div>
            </div>
          </motion.div>
        </section>


        {/* Interactive Grid Section */}
        <section id="solucoes" className="grid-section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2>Soluções de Impressão que trabalham por você</h2>
            <p>Esqueça os problemas técnicos, gastos sem controle e retrabalho.</p>
          </motion.div>

          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div className="bento-item glass large-item" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
              <Printer className="icon" size={48} />
              <h3>Outsourcing de Impressão</h3>
              <p>Fornecimento de equipamentos de ponta, reposição de insumos e assistência total em um único serviço. Você foca no seu negócio, nós cuidamos da impressão.</p>
            </motion.div>

            <motion.div className="bento-item glass" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Settings className="icon" size={32} />
              <h3>Serviços de Manutenção</h3>
              <p>Equipamentos operando com manutenção proativa e preventiva.</p>
            </motion.div>

            <motion.div className="bento-item glass" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Box className="icon" size={32} />
              <h3>Suprimentos</h3>
              <p>Milhares de cartuchos e suprimentos com logística sob demanda.</p>
            </motion.div>

            <motion.div className="bento-item glass" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <PenTool className="icon" size={32} />
              <h3>Venda de Impressoras</h3>
              <p>As melhores marcas e equipamentos perfeitamente dimensionados para você.</p>
            </motion.div>

            <motion.div className="bento-item glass" variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Zap className="icon" size={32} />
              <h3>Controle Total</h3>
              <p>Contratos ativos com atendimento rápido e personalizado.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Calculator Section */}
        <section className="calculator-section">
          <motion.div
            className="calculator-container glass"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="calc-content">
              <h2>Simule sua Economia</h2>
              <p>Descubra quanto você deixa de gastar transferindo a gestão das suas impressões para a QPRIME.</p>

              <div className="slider-container">
                <label>Quantas páginas sua empresa imprime por mês?</label>
                <div className="slider-value">
                  {pages.toLocaleString('pt-BR')} <span>páginas</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="custom-slider"
                />
              </div>
            </div>

            <div className="calc-result">
              <h3>Sua economia estimada*</h3>
              <div className="money-saved">
                R$ {economyPerYear.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                <span>/ano</span>
              </div>
              <p className="calc-disclaimer">*Cálculo estimado considerando redução de desperdício, manutenção, peças e logística de toners.</p>
              <a href={`https://wa.me/5562982480001?text=Olá,%20vi%20no%20site%20que%20posso%20economizar%20R$%20${economyPerYear.toLocaleString('pt-BR')}%20com%20outsourcing.%20Quero%20saber%20mais!`} target="_blank" rel="noreferrer" className="btn-primary">Quero minha proposta</a>
            </div>
          </motion.div>
        </section>
        {/* How it Works Section */}
        <section id="processo" className="process-section">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Como transformamos sua impressão</h2>
            <p>Um processo simples para resultados extraordinários.</p>
          </motion.div>

          <div className="process-grid">
            <motion.div className="process-step glass" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="step-number">01</div>
              <h3>Diagnóstico</h3>
              <p>Analisamos seu parque atual e identificamos gargalos e desperdícios.</p>
            </motion.div>
            <motion.div className="process-step glass" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="step-number">02</div>
              <h3>Proposta</h3>
              <p>Dimensionamos os equipamentos certos para sua demanda real.</p>
            </motion.div>
            <motion.div className="process-step glass" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="step-number">03</div>
              <h3>Instalação</h3>
              <p>Configuramos tudo e treinamos sua equipe para o melhor uso.</p>
            </motion.div>
            <motion.div className="process-step glass" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 }} whileHover={{ y: -10, scale: 1.02 }}>
              <div className="step-number">04</div>
              <h3>Gestão</h3>
              <p>Monitoramos proativamente suprimentos e manutenção 24/7.</p>
            </motion.div>
          </div>
        </section>

        {/* Clients & Cases Section */}
        <section id="cases" className="clients-section">
          <motion.div
            className="stats-premium-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="stats-header-box">
              <div className="stats-header-bg">
                <img src="/office_team.png" alt="Equipe QPrime" />
              </div>
              <div className="stats-header-text">
                <h2>Resultados que se imprimem em <span>números.</span></h2>
                <p>Cada contrato, impressão ou cartucho entregue representa uma operação mais eficiente para nossos clientes.</p>
              </div>
            </div>

            <div className="stats-grid-premium">
              <div className="stat-item-premium glass">
                <div className="stat-number">+300</div>
                <div className="stat-label">Contratos ativos com atendimento personalizado</div>
              </div>
              <div className="stat-item-premium glass">
                <div className="stat-number">+6.000</div>
                <div className="stat-label">Equipamentos operando com manutenção proativa</div>
              </div>
              <div className="stat-item-premium glass">
                <div className="stat-number">+1</div>
                <div className="stat-label">milhão de páginas impressas ao ano com controle total</div>
              </div>
              <div className="stat-item-premium glass">
                <div className="stat-number">+48</div>
                <div className="stat-label">mil cartuchos entregues com logística sob demanda</div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Map Section */}
      <section className="map-section">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2>Onde Estamos</h2>
          <p>Venha tomar um café conosco e conhecer nossa estrutura.</p>
        </motion.div>

        <motion.div
          className="map-container glass"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.849646452296!2d-49.2798418!3d-16.6843981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1658b093cdb%3A0xc6a80fae6097ff47!2sR.%20255%2C%20110%20-%20Setor%20Coimbra%2C%20Goi%C3%A2nia%20-%20GO%2C%2074533-150!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa QPrime"
          ></iframe>

          <div className="map-glass-card glass">
            <h3>QPRIME Matriz</h3>
            <p>Rua 255 Nº 110, Qd.40, Lt. 10</p>
            <p>Setor Coimbra, Goiânia - GO</p>
            <p>CEP: 74533-150</p>
            <a href="https://www.google.com/maps/dir//Rua+255,+110+-+Setor+Coimbra,+Goi%C3%A2nia+-+GO,+74533-150/@-16.6843981,-49.2798418,17z" target="_blank" rel="noreferrer" className="btn-primary" style={{ marginTop: '15px', display: 'inline-block' }}>Traçar Rota</a>
          </div>
        </motion.div>
      </section>

      <footer id="contato" className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: "20px" }}>QPRIME<span style={{ color: '#ff007f' }}>.</span></div>
            <p>Com mais de 22 anos de experiência no ramo de Outsourcing, suprimentos de impressão, venda de impressoras e serviços de manutenção, nossa empresa se destaca no mercado</p>
          </div>

          <div className="footer-col">
            <div style={{ marginBottom: "30px" }}>
              <h3>Contato</h3>
              <p>(62) 3235-9800 – (62) 9 8248-0001</p>
              <p><a href="mailto:contato@qprime.com.br">contato@qprime.com.br</a></p>
            </div>
            <div>
              <h3>Endereço</h3>
              <p>Endereço: Rua 255 Nº 110, Qd.40, Lt. 10, Setor Coimbra, Goiânia - Go, CEP: 74533-150</p>
            </div>
          </div>

          <div className="footer-col menu-col">
            <h3>Menu</h3>
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#quemsomos">Quem Somos</a></li>
              <li><a href="#solucoes">Soluções</a></li>
              <li><a href="#cases">Cases</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          Copyright © 2026 QPrime - Todos os direitos reservados
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a href="#home" className="scroll-top" aria-label="Voltar ao topo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
      </a>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/5562982480001" target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Falar no WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
      </a>
    </>
  )
}

export default App
