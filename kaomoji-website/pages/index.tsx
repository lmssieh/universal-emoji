import Fuse from "fuse.js";
import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Kaomojis from "../components/Kaomojis";
import Notification from "../components/Notification";
import SearchInput from "../components/SearchInput";
import { type GetStaticProps } from "next";

interface kaomjis {
	[key: string]: string;
}

interface Props {
	data: kaomjis[];
}

const Home: NextPage = ({
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [kaomojis, setKaomojis] = useState<kaomjis[]>(data);
	const [searchResult, setSearchResult] = useState<kaomjis[]>(data);
	const [CanShowNotification, setCanShowNotification] = useState(true);

	function updateSearch(value: string) {
		setSearchTerm(value);
	}

	const options = {
		includeScore: true,
		// Search in `author` and in `tags` array
		keys: ["name"],
	};

	const fuse = new Fuse(kaomojis, options);

	useEffect(() => {
		console.log(searchTerm, searchResult);
		const result = fuse.search(searchTerm);
		if (!result.length) {
			if (!searchTerm) {
				setSearchResult(kaomojis);
			} else {
				setSearchResult([]);
				console.log(`no result found`);
			}
		} else {
			const arr: kaomjis[] = [];
			result.forEach((r) => {
				arr.push(r.item);
			});
			setSearchResult(arr);
		}
	}, [searchTerm]);

	function hideNotification() {
		console.log("called hide notification");
		setCanShowNotification(false);
	}
	function showNotification() {
		setCanShowNotification(true);
	}

	return (
		<div className="flex flex-col h-full min-h-[100vh] ">
			<Head>
				<title>(✿ ꈍ◡ꈍ) Kaomoji: Japanese Emoticons</title>
				<meta
					name="description"
					content="Easily search and copy thousands of fun and unique Japanese text emoticons!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<div className="px-2">
				<SearchInput value={searchTerm} onChange={updateSearch} />
				<Kaomojis
					className="flex-1"
					data={searchResult}
					onClick={showNotification}
				/>
			</div>

			<Footer />
			{CanShowNotification && <Notification onClose={hideNotification} />}
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	const kaomjisURL =
		"https://raw.githubusercontent.com/lmssieh/universal-emoji/main/assets/kaomojis.json";
	const res = await fetch(kaomjisURL);
	const data = await res.json();

	const arr: kaomjis[] = [];

	Object.keys(data).forEach((key) => {
		arr.push({
			name: key,
			kaomoji: data[key],
		});
	});

	return {
		props: {
			data: arr,
		},
	};
};
export default Home;
