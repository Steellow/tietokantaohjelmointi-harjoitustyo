import Header from "./components/Header";
import PostPreview from "./components/PostPreview";

const App = () => {
  return (
    <div className="App mx-auto p-6 max-w-4xl">
      <Header />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </div>
  );
};

export default App;
