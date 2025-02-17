import NavBar from '@/components/NavBar';
import SignupForm from '@/components/SignupForm';
import Footer from '@/components/Footer';

function Register() {
    return (
        <div className='h-screen flex flex-col'>
            <NavBar />
            <SignupForm />
            <Footer />
        </div>
    );
}

export default Register;