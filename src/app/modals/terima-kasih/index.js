import Modals from '@/components/modals';
import { Fragment } from 'react';

const Index = () => {

  const handleClose = async () => {
    // Coba menutup modal secara manual jika data-bs-dismiss tidak bekerja
    const modalElement = document.getElementById('terima-kasih');
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
  return (
    <Modals
      classModal="terima-kasih show"
      idModal="terima-kasih"
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
          <div className='text-center'>
            <h5>
              Terima kasih telah mengirimkan pemesanan Anda!
            </h5>
          </div>
        </Fragment>
      }
    />
  );
};

export default Index;
