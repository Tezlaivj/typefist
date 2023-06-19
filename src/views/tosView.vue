<template>
    <body>
        <div class="header">
            <a class="header" href="/register"><i class="fa fa-keyboard"></i></a>
            <a href="/"><i class="fa-sharp fa-solid fa-house"></i></a>
        </div>
        <div class="text">
            <h1>Terms of service</h1>
            <h4>
                <ol>
                    <li>Acceptance of Terms: <br>By accessing and using typefist, users agree to abide by the terms and
                        conditions
                        outlined in the Terms of Service.<br><br></li>
                    <li>User Responsibilities: <br>Users are responsible for maintaining the confidentiality of their
                        account
                        information, including usernames and passwords, and for all activities conducted through their
                        account.<br><br></li>

                    <li>Usage Guidelines: <br>Users must use the website for its intended purpose of improving typing skills
                        and
                        refrain from engaging in any unlawful, abusive, or disruptive behavior. Any misuse of the website
                        may
                        result in termination of access.<br><br></li>

                    <li>Intellectual Property: <br>All content, materials, and intellectual property rights on the website,
                        including text, images, software, and trademarks, are owned by the website or its licensors. Users
                        may
                        not copy, modify, distribute, or exploit any of the website's content without proper authorization.
                        <br><br>
                    </li>

                    <li>Privacy and Data Protection: <br>The website is committed to protecting user privacy. It collects
                        and
                        processes personal information in accordance with applicable data protection laws. The website's
                        Privacy
                        Policy outlines the types of information collected, how it is used, and the measures taken to secure
                        user data.<br><br></li>

                    <li>Third-Party Links: <br>The website may contain links to third-party websites or resources that are
                        not
                        controlled or endorsed by the website. Users acknowledge and agree that the website is not
                        responsible
                        for the availability or accuracy of such external sites and resources.<br><br></li>

                    <li>Disclaimer of Warranties: <br>The website provides the typing practice platform on an "as-is" basis
                        without
                        any warranties or guarantees of any kind, including accuracy, reliability, or fitness for a
                        particular
                        purpose. Users agree to use the website at their own risk.<br><br></li>

                    <li>Limitation of Liability: <br>The website, its owners, and affiliates shall not be liable for any
                        direct,
                        indirect, incidental, consequential, or special damages arising out of or in connection with the use
                        or
                        inability to use the website or its services.<br><br></li>

                    <li>Modifications and Termination: <br>The website reserves the right to modify, suspend, or terminate
                        any
                        aspect of the service, including the availability of features or content, at any time without prior
                        notice.<br><br></li>

                    <li> Governing Law and Jurisdiction: <br>These Terms of Service are governed by the laws of the
                        jurisdiction
                        where the website operates. Any legal actions arising from or related to the use of the website
                        shall be
                        subject to the exclusive jurisdiction of the courts in that jurisdiction.</li>
                </ol>
            </h4>
        </div>
    </body>
</template>

<style scoped lang="scss">
.header {
    height: 5vh;
    display: flex;
    justify-content: space-between;
}

.header a {
    padding: 3% 4%;
    font-size: 30px;
    color: #e57c23;
    transition: 0.3s;
}

.header a:hover {
    color: #e8aa42;
}

* {
    font-family: "Inconsolata";
}

body {
    margin: 0;
    padding: 0;
    height: 250vh;
    background-color: #025464;
}

.text {
    max-width: 50rem;
    min-width: 8rem;
    margin: 4rem 8%;
    padding: 5%;
    color: #025464;
    background-color: #f8f1f1;
    box-shadow: 20px 20px black;
}

h1,
h4 {
    font-size: 110%;
}

@media only screen and (max-width: 700px) {
    .text {
        padding: 15%;
    }

    body {
        body {
            height: 400vh;
        }
    }
}
</style>

<script>

export default {
    mounted() {
        let fontScript = document.createElement('script')
        fontScript.setAttribute('src', 'https://kit.fontawesome.com/cb6613d56d.js')
        fontScript.setAttribute('crossorigin', 'anonymous')
        document.head.appendChild(fontScript)
    }
}
</script>