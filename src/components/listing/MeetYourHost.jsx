import React, { useState } from "react";
import styles from "./MeetYourHost.module.css";
import { Check, Shield, GraduationCap, Sparkles, X } from "../../components/common/Icons";






export const MeetYourHost = ({ host }) => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault(); //seno preventDeafult() , use? : submitting an TML form can cause browser to perform its default form submission behaviour often causing page reload 
    if (!messageText.trim()) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setMessageText("");
      setIsMessageModalOpen(false);
    }, 1800);
  };

  return (
    <section className={styles.hostSection} id="host" aria-labelledby="meet-host-title">
      <h3 id="meet-host-title" className={styles.sectionTitle}>
        Meet your host
      </h3>

      <div className={styles.hostLayout}>
        {/* Left: Host Card & Attributes */}
        <div className={styles.hostCardCol}>
          <div className={styles.hostCard}>
            <div className={styles.hostIdentity}>
              <div className={styles.avatarWrapper}>
                <img
                  src={host.avatarUrl || "/images/hosts/mirashya.jpg"}
                  alt={host.name}
                  className={styles.hostAvatar} />
                
                <div className={styles.verifiedBadge} title="Identity verified">
                  <Check size={14} strokeWidth={3} />
                </div>
              </div>
              <h4 className={styles.hostName}>{host.name}</h4>
              <p className={styles.hostRole}>Host</p>
            </div>

            <div className={styles.hostStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>1,463</span>
                <span className={styles.statLabel}>Reviews</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.68 ★</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{host.yearsHosting}</span>
                <span className={styles.statLabel}>Years hosting</span>
              </div>
            </div>
          </div>

          <div className={styles.hostAttributes}>
            <div className={styles.attributeItem}>
              <div className={styles.attributeIcon}>
                <Sparkles size={20} />
              </div>
              <span>Born in the 80s</span>
            </div>
            <div className={styles.attributeItem}>
              <div className={styles.attributeIcon}>
                <GraduationCap size={20} />
              </div>
              <span>Where I went to school: NICMAR GOA</span>
            </div>
          </div>
        </div>

        {/* Right: Co-hosts & Details */}
        <div className={styles.hostDetailsCol}>
          {host.coHosts && host.coHosts.length > 0 &&
          <div className={styles.coHostsSection}>
              <h4 className={styles.subHeading}>Co-Hosts</h4>
              <div className={styles.coHostsGrid}>
                {host.coHosts.map((coHost) =>
              <div key={coHost.id} className={styles.coHostItem}>
                    {coHost.avatarUrl ?
                <img
                  src={coHost.avatarUrl}
                  alt={coHost.name}
                  className={styles.coHostAvatar} /> :


                <div className={styles.coHostAvatarInitial}>
                        {coHost.name.charAt(0)}
                      </div>
                }
                    <span className={styles.coHostName}>{coHost.name}</span>
                  </div>
              )}
              </div>
            </div>
          }

          <div className={styles.detailsBlock}>
            <h4 className={styles.subHeading}>Host details</h4>
            <p className={styles.detailRow}>
              Response rate: {host.responseRate || "100%"}
            </p>
            <p className={styles.detailRow}>
              Responds {host.responseTime || "within an hour"}
            </p>

            <button
              type="button"
              className={styles.messageHostBtn}
              onClick={() => setIsMessageModalOpen(true)}>
              
              Message host
            </button>
          </div>

          <div className={styles.protectionDisclaimer}>
            <Shield size={24} color="var(--color-brand)" />
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.sectionDivider} />

      {/* Message Host Modal */}
      {isMessageModalOpen &&
      <div
        className="modalBackdrop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: "var(--z-modal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() => setIsMessageModalOpen(false)}>
        
          <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "24px 32px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "var(--shadow-modal)"
          }}
          onClick={(e) => e.stopPropagation()}>
          
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "600" }}>Message {host.name}</h3>
              <button
              type="button"
              onClick={() => setIsMessageModalOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer" }}>
              
                <X size={20} />
              </button>
            </div>
            {sentSuccess ?
          <div style={{ padding: "24px 0", textAlign: "center", color: "var(--color-success)", fontWeight: "600" }}>
                ✓ Message sent to {host.name}!
              </div> :

          <form onSubmit={handleSendMessage}>
                <textarea
              rows={5}
              placeholder={`Hi ${host.name}, I have a question about the romantic 1BHK in Candolim...`}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid var(--color-border-medium)",
                fontSize: "15px",
                fontFamily: "inherit",
                resize: "vertical"
              }}
              required />
            
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                  <button
                type="button"
                onClick={() => setIsMessageModalOpen(false)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border-medium)",
                  background: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600"
                }}>
                
                    Cancel
                  </button>
                  <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "none",
                  background: "var(--color-brand)",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontWeight: "600"
                }}>
                
                    Send message
                  </button>
                </div>
              </form>
          }
          </div>
        </div>
      }
    </section>);

};

export default MeetYourHost;