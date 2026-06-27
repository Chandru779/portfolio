import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/data/site";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { href: siteConfig.social.github, icon: FaGithub, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, icon: FaXTwitter, label: "Twitter" },
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container flex flex-col items-center gap-6 py-12 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {siteConfig.title} · Open to opportunities
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
      <Separator />
      <div className="container py-6 text-center text-sm text-muted-foreground">
        © {year} {siteConfig.name}. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
