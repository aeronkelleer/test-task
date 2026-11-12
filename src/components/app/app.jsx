import '@/styles/index.scss';
import Wrapper from '../layout/wrapper/wrapper';
import MainSection from '../sections/main-section/main-section';
import Preloader from '../ui/preloader/preloader';

// ^======================== App ========================^ //

export default function App() {
  return (
    <Wrapper>
      <MainSection />
      <Preloader />
    </Wrapper>
  );
}
