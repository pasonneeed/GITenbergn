import { useState } from 'react';
import PlusIcon from '@assets/icons/plus.svg?react';
import Button from '@common/Button';
import AddJobModal from '@common/modal/AddJobModal';
import type { FoundJob } from '@utils/data/jobfound/JobFoundDummy';

interface ListFoundProps {
  jobs: FoundJob[];
}

const ListFound = ({ jobs }: ListFoundProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<FoundJob | null>(null);

  const handleOpenModal = (job: FoundJob) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="grid grid-cols-3 gap-6 px-9 py-[60px]">
      {jobs.map((item) => {
        const users = item.userProfiles;
        const userCount = users.length;
        const maxUsers = 3;

        return (
          <div key={item.id} className="flex flex-col items-start">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-[240px] w-[360px] rounded-2xl object-cover"
            />

            <div className="mt-[14px] w-[360px]">
              <div className="text-purple-500 font-B02-SB">{item.tags}</div>
              <span className="mt-[6px] text-gray-900 font-T04-SB">
                {item.title}
              </span>
              <div className="mt-[10px] truncate text-gray-500 font-B02-M">
                {item.description}
              </div>

              <div className="mt-[18px] flex w-full items-center justify-between">
                <div className="flex max-w-[126px] items-center -space-x-2">
                  {users.slice(0, maxUsers).map((user) => (
                    <img
                      key={user.id}
                      src={user.avatar}
                      alt={`${user.id}`}
                      className="h-[38px] w-[38px] rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  {userCount > maxUsers && (
                    <div className="my-[5px] flex h-7 w-9 items-center justify-center rounded-full bg-black p-[6px]">
                      <div className="flex flex-row items-center justify-center gap-[2px]">
                        <div className="text-white font-C01-M">
                          {userCount - maxUsers}
                        </div>
                        <PlusIcon />
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  text="담기"
                  color="primary"
                  type="submit"
                  className="h-[42px] w-[116px] rounded-[10px] font-B03-SB"
                  onClick={() => handleOpenModal(item)}
                />
              </div>
            </div>
          </div>
        );
      })}

      {isModalOpen && selectedJob && <AddJobModal onClose={handleCloseModal} />}
    </div>
  );
};

export default ListFound;
