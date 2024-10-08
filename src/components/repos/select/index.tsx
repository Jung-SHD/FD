import React from "react";
import { FileText } from "lucide-react"; 

import { TRepoContentItem } from "@/store/useGitContentsStore";

interface FileItemProps {
  item: TRepoContentItem;
}

const FileItem: React.FC<FileItemProps> = ({ item }) => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-gray-300">
      <div className="flex items-center gap-4">
        <FileText className="text-gray-500 w-6 h-6" /> {/* 파일 아이콘 */}
        <div className="text-black font-medium">{item.name}</div>
      </div>
      <div className="flex justify-between w-[300px] text-gray-500 text-sm">
        <div>{item.type}</div>
        <div>{item.sha.slice(0, 7)}</div>
      </div>
    </div>
  );
};

interface ModalProps {
  files: TRepoContentItem[];
  onCancel: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ files, onCancel, onConfirm }) => {
  return (
    <div className="p-8 rounded-lg shadow-lg bg-white w-[686px]">
      <h2 className="text-lg font-semibold text-center mb-6">
        선택된 파일을 검사하시겠습니까?
      </h2>
      <div className="border rounded-lg">
        {files.map((file, index) => (
          <FileItem
            key={file.path}
            item={file}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onCancel}
          className="border border-purple-600 text-purple-600 px-4 py-2 rounded-lg w-[90px] h-[58px]"
        >
          취소
        </button>
        <button
          onClick={onConfirm}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg w-[131px] h-[58px]"
        >
          검사하기
        </button>
      </div>
    </div>
  );
};

export default Modal;
