import Modals from '@/components/modals';
import { Fragment, useState } from 'react';
import { formatRupiah, unFormatRupiah } from '@/helper/utils';

const Index = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    no_whatsapp: '',
    layanan: '',
    domainStatus: '',
    nama_bisnis: '',
    referensi_website: '',
    pesan: '',
    budget: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    // Jika field adalah `budget`, hapus titik dan ubah ke angka
    if (name === 'budget') {
      newValue = unFormatRupiah(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }));
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Reset error saat pengguna mengetik
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData.nama.length < 6) {
      newErrors.nama = 'Nama lengkap harus minimal 6 karakter';
    }

    if (!/^\d+$/.test(formData.no_whatsapp)) {
      newErrors.no_whatsapp = 'No WhatsApp harus berupa angka';
    } else if (formData.no_whatsapp.length < 10) {
      newErrors.no_whatsapp = 'No WhatsApp harus minimal 10 digit';
    }

    if (!/^\d+$/.test(formData.budget)) {
      newErrors.budget = 'Budget hanya boleh berisi angka';
    } else if (parseInt(formData.budget) < 1500000) {
      newErrors.budget = 'Budget minimal adalah Rp 1.500.000';
    }
    // else if (formData.budget < 1000000) { // Minimum budget for website creation (e.g., 1 million IDR)
    //   newErrors.budget = 'Budget minimal untuk pembuatan website adalah Rp 1.000.000';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const domain = process.env.SITE_URL;

    const pesanWhatsApp = `Halo ${domain}, saya ingin memesan dengan detail berikut:\n\nNama: ${formData.nama}\nEmail: ${formData.email}\nNo WhatsApp: ${formData.no_whatsapp}\nLayanan: ${formData.layanan}\nSudah Memiliki Domain: ${formData.domainStatus}\nNama Bisnis: ${formData.nama_bisnis}\nReferensi Website: ${formData.referensi_website || '-'}\nDeskripsi Singkat Bisnis: ${formData.pesan || '-'}\nBudget: Rp ${formatRupiah(formData.budget)}\n\nMohon informasi lebih lanjut. Terima kasih!`;

    const noAdmin = '6281228883616';
    const urlWhatsApp = `https://wa.me/${noAdmin}?text=${encodeURIComponent(pesanWhatsApp)}`;
    window.open(urlWhatsApp, '_blank');

    handleClose();
    closeModal();
    showTerimaKasih();
  };

  const closeModal = async () => {
    // Coba menutup modal secara manual jika data-bs-dismiss tidak bekerja
    const modalElement = document.getElementById('pesan-sekarang');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
      document.body.classList.remove('modal-open'); // Hapus overlay modal Bootstrap
    }
    // Hapus class 'show' pada modal-backdrop
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('show');
      setTimeout(() => {
        backdrop.remove(); // Hapus elemen backdrop setelah efek transition
      }, 0); // Delay agar efek fade-out terlihat
    }
  };
  const handleClose = async () => {
    setFormData({
      nama: '',
      email: '',
      no_whatsapp: '',
      layanan: '',
      domainStatus: '',
      nama_bisnis: '',
      referensi_website: '',
      pesan: '',
      budget: ''
    });
    setErrors({});
  };
  const showTerimaKasih = async () => {
    const modalElement = document.getElementById('terima-kasih');
    if (modalElement) {
      modalElement.classList.add('show'); // Tambahkan class untuk menampilkan modal
      modalElement.style.display = 'block'; // Pastikan modal terlihat
    }
  };

  return (
    <Modals
      classModal="pesan-sekarang show"
      idModal="pesan-sekarang"
      modalBg={null}
      modalHeading={null}
      btnClose={false}
      onClose={handleClose}
      modalHeader={
        <Fragment>
          <svg className="modal-bg" xmlns="http://www.w3.org/2000/svg" width="379px" height="369px">
            <defs>
              <linearGradient id="PSgrad_016" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              fill="url(#PSgrad_016)"
              d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
            />
          </svg>
        </Fragment>
      }
      modalBody={
        <Fragment>
          <div className="form-wrapper">
            <h3 className="mb-0">Konsultasi Gratis</h3>
            <p>Isi data berikut & tim kami akan segera menghubungi Anda via WhatsApp.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 col-lg-4 mb-4">
                  <input
                    className="mb-0"
                    type="text"
                    name="nama"
                    placeholder="Nama Lengkap"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                  />
                  {errors.nama && <small className="text-danger">{errors.nama}</small>}
                </div>
                <div className="col-md-12 col-lg-4 mb-4">
                  <input
                    className="mb-0"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12 col-lg-4 mb-4">
                  <input
                    className="mb-0"
                    type="text"
                    name="no_whatsapp"
                    placeholder="No WhatsApp"
                    value={formData.no_whatsapp}
                    onChange={handleChange}
                    required
                  />
                  {errors.no_whatsapp && (
                    <small className="text-danger">{errors.no_whatsapp}</small>
                  )}
                </div>
                <div className="col-md-12 col-lg-4 mb-4">
                  <select
                    className="mb-0"
                    name="layanan"
                    value={formData.layanan}
                    onChange={handleChange}
                    required>
                    <option value="" disabled={true}>
                      Pilih Layanan
                    </option>
                    <option value="Pembuatan Website Personal">Pembuatan Website Personal</option>
                    <option value="Pembuatan Website Perusahaan">
                      Pembuatan Website Perusahaan
                    </option>
                    <option value="Pembuatan Website Instansi & Pemerintah">
                      Pembuatan Website Instansi & Pemerintah
                    </option>
                    <option value="Pembuatan Website Katalog & Toko Online">
                      Pembuatan Website Katalog & Toko Online
                    </option>
                    <option value="Pembuatan Website Hotel Penginapan">
                      Pembuatan Website Hotel Penginapan
                    </option>
                    <option value="Pembuatan Website Sekolah">Website Sekolah</option>
                    <option value="Pembuatan Website Wisata & Rental Mobil">
                      Pembuatan Website Wisata & Rental Mobil
                    </option>
                    <option value="Pembuatan Website Klinik & Rumah Sakit">
                      Pembuatan Website Klinik & Rumah Sakit
                    </option>
                    <option value="Pembuatan Website UKM & UMKM">
                      Pembuatan Website UKM & UMKM
                    </option>
                    <option value="Redesain Website">Redesain Website</option>
                    <option value="Pembuatan Landing Page">Pembuatan Landing Page</option>
                    <option value="Pengembangan Web Kustom">Pengembangan Web Kustom</option>
                  </select>
                </div>
                <div className="col-md-12 col-lg-4 mb-4">
                  <select
                    className="mb-0"
                    name="domainStatus"
                    value={formData.domainStatus}
                    onChange={handleChange}
                    required>
                    <option value="" disabled={true}>
                      Sudah Memiliki Domain?
                    </option>
                    <option value="Ya">Ya</option>
                    <option value="Belum">Belum</option>
                  </select>
                </div>
                <div className="col-md-12 col-lg-4 mb-4">
                  <input
                    className="mb-0"
                    type="text"
                    name="nama_bisnis"
                    placeholder="Nama Bisnis/Brand"
                    value={formData.nama_bisnis}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12 col-lg-12 mb-4">
                  <input
                    className="mb-0"
                    type="url"
                    name="referensi_website"
                    placeholder="Referensi Website"
                    value={formData.referensi_website}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12 mb-4">
                  <textarea
                    className="mb-0"
                    name="pesan"
                    placeholder="Deskripsi Singkat Bisnis"
                    value={formData.pesan}
                    onChange={handleChange}></textarea>
                </div>
                <div className="col-md-12 col-lg-12 mb-4">
                  <input
                    className="mb-0"
                    type="text"
                    name="budget"
                    placeholder="Budget yang Disiapkan"
                    value={formData.budget ? formatRupiah(formData.budget) : ''}
                    onChange={handleChange}
                    required
                  />
                  {errors.budget && <small className="text-danger">{errors.budget}</small>}
                </div>
                <div className="btn-wrapper text-center mb-4">
                  <button type="submit" className="custom-btn btn-big grad-style-ef">
                    Pemesanan via WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Fragment>
      }
    />
  );
};

export default Index;
