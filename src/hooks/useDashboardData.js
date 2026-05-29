import { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * Custom hook for fetching dashboard data
 * Fetches jobs and applications in parallel using Promise.all()
 * Manages loading and error states
 * Requires authentication
 *
 * @returns {object} { jobs, applications, loading, error }
 *
 * @example
 * const { jobs, applications, loading, error } = useDashboardData();
 *
 * if (loading) return <div>Loading...</div>;
 * if (error) return <div>Error: {error}</div>;
 *
 * return (
 *   <div>
 *     <h2>Jobs: {jobs.length}</h2>
 *     <h2>Applications: {applications.length}</h2>
 *   </div>
 * );
 */
function useDashboardData() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check if user is authenticated
        if (!api.isAuthenticated()) {
          setError('Please login first.');
          setJobs([]);
          setApplications([]);
          return;
        }

        let jobsData = null;
        let applicationsData = null;
        let jobsError = null;
        let applicationsError = null;

        try {
          jobsData = await api.request('/api/jobs', { method: 'GET', signal }, true);
          console.info('Jobs request result:', jobsData);
        } catch (e) {
          // Ignore aborts silently; record other errors
          if (e && e.name === 'AbortError') {
            /* aborted - ignore */
          } else {
            jobsError = e;
            console.error('Jobs request failed:', e);
          }
        }

        try {
          applicationsData = await api.request('/api/applications', { method: 'GET', signal }, true);
          console.info('Applications request result:', applicationsData);
        } catch (e) {
          if (e && e.name === 'AbortError') {
            /* aborted - ignore */
          } else {
            applicationsError = e;
            console.error('Applications request failed:', e);
          }
        }

        // Convert possible response shapes to arrays
        const jobsArray = jobsData
          ? Array.isArray(jobsData)
            ? jobsData
            : jobsData?.jobs || []
          : [];

        const applicationsArray = applicationsData
          ? Array.isArray(applicationsData)
            ? applicationsData
            : applicationsData?.applications || []
          : [];

        // Only update state when component still mounted
        if (!signal.aborted) {
          setJobs(jobsArray);
          setApplications(applicationsArray);

          // Do not set error state for aborted requests
          if (!jobsError && !applicationsError) {
            setError(null);
          } else {
            const messages = [];
            if (jobsError) messages.push(`Jobs: ${jobsError.message || jobsError}`);
            if (applicationsError) messages.push(`Applications: ${applicationsError.message || applicationsError}`);
            setError(messages.join(' | '));
          }
        }
      } catch (err) {
        // Ignore AbortError silently
        if (err && err.name === 'AbortError') {
          return;
        }
        console.error('Failed to fetch dashboard data:', err);
        setError(err.message || 'Failed to load dashboard data. Please try again.');
        setJobs([]);
        setApplications([]);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchDashboardData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    jobs,
    applications,
    loading,
    error,
  };
}

export default useDashboardData;
