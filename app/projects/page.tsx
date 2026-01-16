import React from 'react'
import Navbar from '@/components/Navbar'
import SideSocials from '@/components/SideSocials'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'

const completeApps = [
  {
    title: 'ChertNodes',
    desc: 'Minecraft servers hosting',
    tags: ['HTML', 'SCSS', 'Python', 'Flask'],
    thumbnail: '/projects/chertnodes.png',
    actions: [{ label: 'Live', href: '#' }, { label: 'Cached', href: '#' }],
  },
  {
    title: 'Kahoot Answers Viewer',
    desc: 'Get answers to your kahoot quiz',
    tags: ['CSS', 'Express', 'Node.js'],
    thumbnail: '/projects/kahoot.png',
    actions: [{ label: 'Live', href: '#' }],
  },
  {
    title: 'ProtectX',
    desc: 'Discord anti-crash bot',
    tags: ['React', 'Express', 'Node.js'],
    thumbnail: '/projects/protectx.png',
    actions: [{ label: 'Cached', href: '#' }],
  },
];

const smallProjects = [
  { title: 'Bot boilerplate', desc: 'Start creating scalable discord.js bot', tags: ['Discord.js', 'TS'] },
  { title: 'My blog', desc: 'Personal dev blog', tags: ['Vue', 'CSS'] },
  { title: 'Figma pro', desc: 'Figma landing page', tags: ['Figma'] },
  { title: 'Crash protect website', desc: 'Small test site', tags: ['Figma', 'HTML'] },
  { title: 'CSS experiments', desc: 'Collection of fun layouts', tags: ['HTML', 'CSS'] },
  { title: 'Web Dev nvim config', desc: 'Config for my dev setup', tags: ['Lua'] },
];

const Page = () => {
  return (
    <div>
      <Navbar />
      <SideSocials />

      <main style={{ maxWidth: 1200, margin: '40px auto', padding: '20px 28px' }}>
        <h1 style={{ color: '#d6b7ff', marginBottom: 6 }}>/projects</h1>
        <p style={{ color: '#9aa0b4', marginTop: 0 }}>List of my projects</p>

        <section style={{ marginTop: 28 }}>
          <h2 style={{ color: '#d6b7ff' }}>#complete-apps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginTop: 12 }}>
            {completeApps.map((p) => (
              <ProjectCard key={p.title} title={p.title} desc={p.desc} tags={p.tags} thumbnail={p.thumbnail} actions={p.actions} />
            ))}
          </div>
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ color: '#d6b7ff' }}>#small-projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 }}>
            {smallProjects.map((p) => (
              <ProjectCard key={p.title} title={p.title} desc={p.desc} tags={p.tags} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Page
