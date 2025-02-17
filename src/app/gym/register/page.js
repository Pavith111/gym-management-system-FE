import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import GymRegistrationForm from '@/components/GymRegForm';

function Register() {
    return (
        <div className='h-screen flex flex-col'>
            <NavBar />
            <GymRegistrationForm />
            <Footer />
        </div>
    );
}

export default Register;