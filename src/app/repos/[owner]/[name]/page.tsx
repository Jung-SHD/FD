"use client";
import Button from "@/components/atoms/button";
import CaretLeft from "@/assets/icons/CaretLeft.svg";
import AlertTriangle from "@/assets/icons/Vector10.svg";
import YellowTriangle from "@/assets/icons/Polygon1.svg";
import CheckCircle from "@/assets/icons/Ellipse213.svg";
import List from "@/components/atoms/list";
import VulnerabilityAnalysisCode from "@/components/pages/my-library/VulnerabilityAnalysisCode";
import InfoBox from "@/components/atoms/infobox/infobox";
import { useEffect, useState } from "react";
import useGitContentsStore, { TRepoContentItem, Tstatus } from "@/store/useGitContentsStore";
import useGitRepoStore from "@/store/useGitRepoStore";
import { useParams, useRouter } from "next/navigation";

const isLogin = true;

const VulnerabilityAnalysis = () => {
  const { owner, name } = useParams();
  const repoOwner = Array.isArray(owner) ? owner[0] : owner;
  const repoName = Array.isArray(name) ? name[0] : name;
  const [curentCode, setCurrentCode] = useState<string | null>(null);
  const [currentFile, setCurrentFile] = useState<TRepoContentItem>();
  const [currentStatus, setCurrentStatus] = useState<Tstatus>();
  const {
    selectedFiles,
    fetchRepoContents,
    setRepoContents,
    fetchFileContent,
  } = useGitContentsStore();
  const { gitToken } = useGitRepoStore();
  useEffect(() => {
    const fetchContents = async () => {
      if (repoOwner && repoName && gitToken) {
        const contents = await fetchRepoContents({
          token: gitToken,
          owner: repoOwner,
          repo: repoName,
        });
        setRepoContents(contents);
      }
    };
    fetchContents();
  }, [repoOwner, repoName, gitToken, fetchRepoContents, setRepoContents]);
  useEffect(() => {
    if (!currentFile) return;
    const fileDetails = selectedFiles.find(
      (file) => file.path === currentFile.path,
    );
    if (fileDetails?.status) setCurrentStatus(fileDetails.status);
    const fetchContent = async () => {
      try {
        const content = await fetchFileContent(currentFile.download_url);
        if (content) {
          setCurrentCode(content);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchContent();
  }, [currentFile, selectedFiles, fetchFileContent]);
  const router = useRouter();
  const handlePage = () => {
    router.push("/repos");
  };
  const handleFileInspection = () => {
    // 검사하기 버튼 클릭 시 실행되는 함수 (로직 추가 필요)
    console.log("검사 시작");
  };
  return (
    <>
      <div className="mb-12 flex gap-6">
        <Button
          rounded="md"
          variant="outline"
          className="h-[79px] w-[79px] border-4 border-primary-500"
          onClick={handlePage}
        >
          <CaretLeft />
        </Button>
        <div className="flex h-[79px] w-[1665px] items-center justify-start rounded-full border-4 border-primary-500 bg-transparent px-8 py-5 text-primary-500">
          <span className="title-md-medium">sfacweb - 1</span>
        </div>
      </div>
      <div className="mb-6 flex max-h-[1065px] w-[1761px] gap-7">
        <div className="gap-6">
          <Button
            rounded={"xs"}
            className="subtitle-md-bold mb-6 flex h-[107px] w-[247px]"
          >
            폴더 전체 검사
          </Button>
          <div className="title-xs-medium mb-6 flex h-[116px] w-[247px] flex-col gap-3 rounded-lg px-2">
            <p className="flex h-7">
              <AlertTriangle className="flex h-[25px] w-[25px] items-center justify-center" />
              <span className="flex-1">검출된 취약점</span>
              <span className="inline-flex"></span>
            </p>
            <p className="flex h-7">
              <YellowTriangle className="h-[25px] w-[25px]" />
              <span className="flex-1">수정 제안</span>
              <span className="inline-flex"></span>
            </p>
            <p className="flex h-7">
              <CheckCircle className="h-[25px] w-[25px]" />
              <span className="flex-1">문제 없음</span>
              <span className="inline-flex"></span>
            </p>
          </div>
          <List setCurrentFile={setCurrentFile}></List>
        </div>
        <div className="w-full gap-7 rounded-lg">
          {/* <VulnerabilityAnalysisCode
            code={curentCode}
            className={status === "success" ? "h-[555px]" : ""} // 삼항 연산자 수정
          />
          {status === "success" && (
            <div className="w-[1486px] gap-5 rounded-lg">
              <div className="subtitle-md-bold">수정된 코드</div>
              <div className="overflow-x-hidden">
                <InfoBox
                  backgroundClass="bg-bg-red_light"
                  className="mb-5"
                  title=""
                  titleClass=""
                  description={["",""]}
                  codeSnippet={{
                    language: "",
                    code: ""
                  }}
                />
              </div>
            </div>
          )} */}
        </div>
      </div>
      <div className="mb-6 flex max-h-[1157px] min-h-max w-[1761px] gap-7">
        <div className="gap-6">
          <Button
            rounded={"xs"}
            className="subtitle-md-bold flex w-[247px]"
            onClick={handleFileInspection} // 함수 직접 전달
          >
            검사하기
          </Button>
        </div>
      </div>
    </>
  );
};
export default VulnerabilityAnalysis;
