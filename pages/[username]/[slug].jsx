import styles from "../../styles/Post.module.css";
import PostContent from "../../components/PostContent";
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  const userDoc = await getUserWithUsername(username);

  let post, path;
  if (userDoc) {
    const postRef = userDoc.ref.collection("posts").doc(slug);
    post = postToJSON(await postRef.get());

    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 5000
  };
}

export async function getStaticPaths() {
  const snapshot = await firestore.collectionGroup("posts").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug }
    };
  });

  return {
    paths, // [{ params: { username, slug } }]
    fallback: "blocking"
  };
}

export default function Post(props) {
  return (
    <main className={styles.container}>
      <section>
        <PostContent post={props.post} />
      </section>
    </main>
  );
}
