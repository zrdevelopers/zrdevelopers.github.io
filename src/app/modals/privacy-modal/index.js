import Modals from '@/components/modals';
import { Fragment } from 'react';

const Index = () => {
  return (
    <Modals
      classModal="privacy-modal"
      idModal="privacy-modal"
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
          <h3>Kebijakan Privasi</h3>
          <p className="mb-0">
            ZRDigitalTech adalah penyedia layanan pembuatan website yang berkomitmen untuk membantu
            mewujudkan keinginan dan kebutuhan Anda dalam dunia digital.
          </p>
          <p>
            Jika saat ini Anda membutuhkan sebuah website, Anda telah berada di tempat yang tepat.
            Kami berusaha menciptakan website Anda semenarik mungkin dan sesuai dengan kebutuhan
            promosi produk atau bisnis Anda.
          </p>

          <h6 className="mb-0">Informasi yang Kami Kumpulkan</h6>
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara langsung ketika Anda menghubungi
            kami atau menggunakan layanan kami, seperti nama, alamat email, nomor telepon, dan
            informasi lainnya yang diperlukan untuk membantu kami memberikan layanan terbaik.
          </p>

          <h6 className="mb-0">Penggunaan Informasi</h6>
          <p className="mb-0">Informasi yang kami kumpulkan digunakan untuk:</p>
          <ul>
            <li>Menghubungi Anda terkait layanan pembuatan website</li>
            <li>Memberikan konsultasi dan penawaran yang sesuai dengan kebutuhan Anda</li>
            <li>Meningkatkan kualitas layanan kami agar dapat memenuhi harapan Anda</li>
          </ul>

          <h6 className="mb-0">Keamanan Data</h6>
          <p>
            Kami berkomitmen menjaga keamanan data pribadi Anda dengan menerapkan berbagai langkah
            pengamanan yang sesuai. Namun, kami juga mengingatkan bahwa tidak ada sistem yang 100%
            aman di dunia maya.
          </p>

          <h6 className="mb-0">Pembagian Informasi</h6>
          <p>
            ZRDigitalTech tidak akan menjual, memperdagangkan, atau menyewakan informasi pribadi
            Anda kepada pihak ketiga tanpa izin Anda, kecuali jika diwajibkan oleh hukum.
          </p>

          <h6 className="mb-0">Perubahan Kebijakan Privasi</h6>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan
            kami informasikan melalui website kami atau media komunikasi lainnya.
          </p>

          <h6 className="mb-0">Kontak</h6>
          <p className="mb-0">
            Jika Anda memiliki pertanyaan atau permintaan terkait Kebijakan Privasi ini, silakan
            hubungi kami melalui:
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

export default Index;
