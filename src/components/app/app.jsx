import '@/styles/index.scss';
import Wrapper from '../layout/wrapper/wrapper';
import MainSection from '../sections/main-section/main-section';

// ^======================== App ========================^ //

export default function App() {
  return (
    // <Routes>
    //   {/* <Route path={AppRoute.LOGIN} element={<LoginPage />} /> */}
    //   {/* <Route path={AppRoute.HOME} element={<PrivateRoute element={<Layout />} />}> */}
    //   <Route path={AppRoute.HOME} element={<HomePage />} />
    //   {/* </Route> */}
    // </Routes>
    <>
      <Wrapper>
        <MainSection />
      </Wrapper>
    </>
  );
}
