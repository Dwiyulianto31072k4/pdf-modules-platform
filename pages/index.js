import React from 'react'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Pustaka Modul Digital
        </h1>
        <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
          Akses, kelola, dan bagikan semua modul PDF Anda dalam satu platform yang elegan dan cepat.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary">Mulai Membaca</button>
          <button className="btn-secondary">Upload Modul</button>
        </div>
      </div>
    </Layout>
  )
}
