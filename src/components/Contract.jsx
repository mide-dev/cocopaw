import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";

const Contract = () => {
  const [textToCopy] = useState("7kq3Rr1PyABRT4DWq2146eqrrS6Kd7Zopb1bAT7FmRhf");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return clearTimeout(() => clearTimeout(timer));
    }
  }, [copied]);

  return (
    <div className="inline-block">
      <CopyToClipboard text={textToCopy} onCopy={() => setCopied(true)}>
        <p className="">{textToCopy}</p>
      </CopyToClipboard>
      {copied && (
        <div
          className={`transition-opacity duration-500 ${
            copied ? "opacity-100" : "opacity-0"
          } absolute left-0 right-0 flex justify-center items-center pt-4 lg:pt-6 w-full`}
        >
          <button className="p-3 bg-[var(--clr-secondary)] text-white rounded-lg shadow-md">
            Contract copied to clipboard!
          </button>
        </div>
      )}
    </div>
  );
};

export default Contract;
