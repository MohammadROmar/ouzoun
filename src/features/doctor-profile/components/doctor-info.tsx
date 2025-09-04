import FallbackImage from '@/shared/components/dashboard/fallback-image';
import userImg from '@/assets/images/user.jpg';
import { User } from '@/core/models/user';

type DoctorInfo = { doctor: User; label: string };

function DoctorInfo({ doctor, label }: DoctorInfo) {
  return (
    <section className="card-shadow mt-4 flex w-full items-center gap-4 rounded-xl p-2 max-md:flex-col max-md:gap-2 md:p-3">
      <div className="border-green relative size-24 overflow-hidden rounded-full border-2">
        <FallbackImage
          src={`/api/images?imagePath=${doctor.profileImagePath}`}
          fallbackSrc={userImg}
          alt=""
          fill
          sizes="(min-width: 40rem) 25vw, 90vw"
          aria-labelledby="doctor-name"
          className="object-cover object-center"
        />
      </div>
      <h2
        id="doctor-name"
        className="ltr:font-ubuntu text-3xl max-md:text-center md:text-4xl"
      >
        {label} {doctor.userName}
      </h2>
    </section>
  );
}

export default DoctorInfo;
