import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-6 md:px-8 md:py-0 flex items-center border-t justify-center bg-white">
      <div className="container">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            srini047
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}