function navbar() {
  return (
    <div>
      <div>
              <h3 className="font-bold">Navigasi</h3>
              <ul className="mt-4 space-y-3 text-white/70">
                <li><a href="#home" className="hover:text-sky">Home</a></li>
                <li><a href="#tentang" className="hover:text-sky">Tentang Kami</a></li>
                <li><a href="#produk" className="hover:text-sky">Produk</a></li>
                <li><a href="#keunggulan" className="hover:text-sky">Keunggulan</a></li>
              </ul>
      </div>
    </div>
  )
}

export default navbar