import Modals from '@/components/modals';
import { Fragment } from 'react';

const TermsConditions = () => {
  return (
    <Modals
      classModal="terms-modal"
      idModal="terms-modal"
      modalBg={null}
      modalHeading={null}
      btnClose={false}
      modalHeader={
        <Fragment>
          <svg
            className="modal-bg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="379px"
            height="369px">
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

          <svg
            className="news-modal-bg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="379px"
            height="369px">
            <defs>
              <linearGradient id="PSgrad_017" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fillRule="evenodd"
              fill="url(#PSgrad_017)"
              d="M54.086,281.380 L105.962,327.505 C173.075,387.178 276.496,381.853 336.956,315.610 C397.418,249.367 392.025,147.292 324.911,87.619 L273.035,41.495 C205.921,-18.178 102.501,-12.853 42.040,53.390 C-18.422,119.633 -13.028,221.708 54.086,281.380 Z"
            />
          </svg>
        </Fragment>
      }
      modalBody={
        <Fragment>
          <h3>Syarat & Ketentuan</h3>

          <p>
            Selamat datang di ZRDigitalTech. Dengan menggunakan layanan pembuatan website kami, Anda
            setuju untuk mematuhi syarat dan ketentuan berikut:
          </p>

          <h6 className="mb-0">1. Layanan</h6>
          <p>
            ZRDigitalTech menyediakan layanan pembuatan website sesuai dengan kebutuhan dan
            kesepakatan yang telah disetujui bersama.
          </p>

          <h6 className="mb-0">2. Kewajiban Pengguna</h6>
          <ul>
            <li>
              Pengguna wajib memberikan informasi yang akurat dan lengkap untuk proses pembuatan
              website.
            </li>
            <li>
              Pengguna bertanggung jawab atas konten yang dimasukkan ke dalam website yang dibuat.
            </li>
            <li>
              Pengguna tidak diperkenankan menggunakan layanan kami untuk tujuan ilegal atau
              melanggar hukum.
            </li>
          </ul>

          <h6 className="mb-0">3. Pembayaran</h6>
          <p>
            Pembayaran dilakukan sesuai dengan kesepakatan dan syarat yang telah ditentukan sebelum
            proyek dimulai.
          </p>

          <h6 className="mb-0">4. Perubahan dan Pembatalan</h6>
          <p>
            Setiap perubahan atau pembatalan proyek harus disampaikan secara tertulis dan dapat
            dikenakan biaya tambahan sesuai kesepakatan.
          </p>

          <h6 className="mb-0">5. Hak Cipta dan Kepemilikan</h6>
          <p>
            Hak cipta atas website yang dibuat sepenuhnya menjadi milik pengguna setelah seluruh
            proses pembayaran selesai.
          </p>

          <h6 className="mb-0">6. Batasan Tanggung Jawab</h6>
          <p>
            ZRDigitalTech tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang
            timbul dari penggunaan website.
          </p>

          <h6 className="mb-0">7. Perubahan Syarat & Ketentuan</h6>
          <p>
            ZRDigitalTech berhak mengubah syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan
            sebelumnya. Perubahan akan diumumkan melalui website resmi kami.
          </p>

          <h6 className="mb-0">8. Kontak</h6>
          <p className="mb-0">
            Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi kami:
          </p>
          <ul>
            <li>
              Email: <a href="mailto:hello@zrdigitaltech.com">hello@zrdigitaltech.com</a>
            </li>
            <li>Telepon: 0812-2888-3616</li>
          </ul>
        </Fragment>
      }
    />
  );
};

export default TermsConditions;
