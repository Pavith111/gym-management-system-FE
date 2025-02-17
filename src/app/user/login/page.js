import NavBar from '@/components/NavBar';
import LoginForm from '@/components/LoginForm';
import Footer from '@/components/Footer';

function Register() {
    return (
        <div className='h-screen flex flex-col'>
            <NavBar />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Register;