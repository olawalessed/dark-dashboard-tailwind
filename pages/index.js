import CreatorsForm from "../components/CreatorsForm";
import Layout from "@/components/fixed/Layout";
import Link from "next/link";
import styles from "@/styles/Index.module.css";
import { Button } from "semantic-ui-react";
import Intro from "@/components/Intro";

export default function Index() {
  return (
    <Layout>
     <Intro />
    </Layout>
  );
}
