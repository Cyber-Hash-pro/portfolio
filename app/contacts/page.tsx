import React from 'react'
import Navbar from '@/components/Navbar'
import SideSocials from '@/components/SideSocials'
import Footer from '@/components/Footer'

const ContactsPage = () => {
  return (
    <div>
      <Navbar />
      <SideSocials />

      <main style={{ maxWidth: 1200, margin: '40px auto', padding: '20px 28px' }}>
        <header style={{ marginBottom: 24 }}>
          <h1 style={{ color: '#d6b7ff', margin: 0 }}>/contacts</h1>
          <p style={{ color: '#9aa0b4', marginTop: 8 }}>Who am i?</p>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 24, alignItems: 'start' }}>
          <div>
            <p style={{ color: '#9aa0b4', lineHeight: 1.9 }}>
              I&apos;m interested in freelance opportunities. However, if you have other request or
              question, don&apos;t hesitate to contact me
            </p>

            <h2 style={{ color: '#d6b7ff', marginTop: 40 }}>#all-media</h2>
            <div style={{ display: 'flex', gap: 18, marginTop: 12, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: '#9aa0b4' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.36 8.55 8.55 0 01-2.71 1.04 4.26 4.26 0 00-7.27 3.88A12.1 12.1 0 013 4.79a4.26 4.26 0 001.32 5.68c-.66-.02-1.28-.2-1.82-.5v.05a4.26 4.26 0 003.42 4.18c-.36.1-.74.12-1.13.05a4.27 4.27 0 003.98 2.96A8.55 8.55 0 012 19.54a12.07 12.07 0 006.54 1.92c7.86 0 12.17-6.51 12.17-12.16v-.55A8.63 8.63 0 0024 6.5a8.32 8.32 0 01-2.54.7z"/></svg>
                <span style={{ color: '#9aa0b4' }}>@elias</span>
              </div>

              <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: '#9aa0b4' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 12.5v-5h2v5H7zm4 0h-2v-7h2v7zm4 0h-2v-4h2v4z"/></svg>
                <span style={{ color: '#9aa0b4' }}>@elias</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ border: '1px solid rgba(255,255,255,0.06)', padding: 14, borderRadius: 6, minWidth: 320 }}>
              <div style={{ fontSize: 14, color: '#fff', fontWeight: 600, marginBottom: 8 }}>Support me here</div>
              <div style={{ color: '#9aa0b4' }}>4149500120690030</div>
            </div>

            <div style={{ border: '1px solid rgba(255,255,255,0.06)', padding: 14, borderRadius: 6, minWidth: 320 }}>
              <div style={{ fontSize: 14, color: '#fff', fontWeight: 600, marginBottom: 8 }}>Message me here</div>

              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, color: '#cfc6d9' }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎮</div>
                <div>!Elias#1234</div>
              </div>

              <div style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#cfc6d9' }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉️</div>
                <div>elias@elias-dev.ml</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactsPage
